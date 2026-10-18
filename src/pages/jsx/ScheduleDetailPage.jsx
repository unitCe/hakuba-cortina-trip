import { Link, useNavigate, useParams } from "react-router-dom";

export default function ScheduleDetailPage({ schedules, setSchedules }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = schedules.find((schedule) => schedule.id === id);

  if (!item) return <div className="empty-state"><h1>予定が見つかりません</h1><p>削除されたか、URLが正しくない可能性があります。</p><Link to="/schedules" className="button button-primary">予定一覧へ戻る</Link></div>;

  function deleteItem() {
    if (!window.confirm(`「${item.title}」を削除しますか？`)) return;
    setSchedules((items) => items.filter((schedule) => schedule.id !== item.id));
    navigate("/schedules");
  }

  return (
    <div className="page-stack">
      <div className="page-intro"><div><span className="eyebrow">ITINERARY DETAILS</span><h1>予定詳細</h1><p>予定の内容を確認できます。</p></div><Link to="/schedules" className="button button-secondary">← 一覧へ</Link></div>
      <article className="detail-card">
        <div className="detail-top"><span className="category-pill">{item.category || "その他"}</span><span className="detail-id">予定ID：{item.id}</span></div>
        <h2>{item.title}</h2>
        <div className="detail-facts">
          <div className="detail-fact"><span className="fact-icon">▦</span><div><small>日付</small><strong>{item.date ? new Date(`${item.date}T00:00:00`).toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric", weekday: "long" }) : "未設定"}</strong></div></div>
          <div className="detail-fact"><span className="fact-icon">◷</span><div><small>時刻</small><strong>{item.time || "未設定"}</strong></div></div>
          <div className="detail-fact"><span className="fact-icon">⌖</span><div><small>場所</small><strong>{item.location || "未設定"}</strong></div></div>
        </div>
        <div className="detail-description"><h3>詳細・メモ</h3><p>{item.description || "詳細メモはありません。"}</p></div>
        <div className="form-actions"><button className="button button-danger" onClick={deleteItem}>削除する</button><Link className="button button-primary" to="/schedules" state={{ editId: item.id }}>一覧から編集する</Link></div>
      </article>
      <p className="helper-text">ヒント：予定一覧画面の「編集」から内容を変更できます。</p>
    </div>
  );
}
