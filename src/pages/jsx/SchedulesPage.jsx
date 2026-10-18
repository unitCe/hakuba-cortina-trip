import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ScheduleForm from "../../components/ScheduleForm.jsx";

function formatLongDate(date) {
  if (!date) return "日付未設定";
  return new Date(`${date}T00:00:00`).toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric", weekday: "short" });
}

export default function SchedulesPage({ schedules, setSchedules }) {
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const editId = location.state?.editId;
    if (editId) {
      const target = schedules.find((item) => item.id === editId);
      if (target) {
        setEditing(target);
        setShowForm(false);
      }
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, schedules, navigate]);

  const filtered = useMemo(() => [...schedules]
    .filter((item) => `${item.title} ${item.location} ${item.category} ${item.description}`.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`)), [schedules, query]);

  function saveSchedule(value) {
    if (editing) {
      setSchedules((items) => items.map((item) => item.id === editing.id ? { ...value, id: editing.id } : item));
    } else {
      const id = globalThis.crypto?.randomUUID?.() || `schedule-${Date.now()}`;
      setSchedules((items) => [...items, { ...value, id }]);
    }
    setEditing(null);
    setShowForm(false);
  }

  function deleteSchedule(item) {
    if (!window.confirm(`「${item.title}」を削除しますか？`)) return;
    setSchedules((items) => items.filter((current) => current.id !== item.id));
  }

  return (
    <div className="page-stack">
      <section className="page-intro"><div><span className="eyebrow">PLAN YOUR DAYS</span><h1>予定一覧</h1><p>旅行中のスケジュールをまとめて管理します。</p></div><button className="button button-primary" onClick={() => { setEditing(null); setShowForm((v) => !v); }}>＋ 予定を追加</button></section>

      {showForm && <section className="section-block"><div className="section-heading"><h2>新しい予定</h2></div><ScheduleForm onSave={saveSchedule} onCancel={() => setShowForm(false)} /></section>}
      {editing && <section className="section-block"><div className="section-heading"><h2>予定を編集</h2></div><ScheduleForm initialValue={editing} onSave={saveSchedule} onCancel={() => setEditing(null)} /></section>}

      <div className="toolbar"><div className="search-box"><span>⌕</span><input aria-label="予定を検索" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="予定名・場所・カテゴリで検索" /></div><span className="result-count">{filtered.length} 件の予定</span></div>

      <div className="schedule-list">
        {filtered.map((item) => <article className="schedule-card" key={item.id}>
          <div className="schedule-date"><span>{item.date ? new Date(`${item.date}T00:00:00`).toLocaleDateString("ja-JP", { month: "short" }) : "未定"}</span><strong>{item.date ? item.date.slice(8) : "--"}</strong><small>{item.time || "時刻未定"}</small></div>
          <div className="schedule-info"><span className="category-pill">{item.category || "その他"}</span><h3><Link to={`/schedules/${item.id}`}>{item.title}</Link></h3><p>⌖ {item.location || "場所未設定"}</p><p className="schedule-description">{item.description || "詳細メモはありません。"}</p><span className="long-date">{formatLongDate(item.date)}</span></div>
          <div className="card-actions"><Link className="small-action" to={`/schedules/${item.id}`}>詳細</Link><button className="small-action" onClick={() => { setShowForm(false); setEditing(item); }}>編集</button><button className="small-action danger-text" onClick={() => deleteSchedule(item)}>削除</button></div>
        </article>)}
        {!filtered.length && <div className="empty-state"><strong>該当する予定がありません</strong><p>検索条件を変えるか、新しい予定を追加してください。</p></div>}
      </div>
      <button className="button button-secondary back-button" onClick={() => navigate("/")}>← ホームに戻る</button>
    </div>
  );
}
