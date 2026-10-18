import { useState } from "react";
import MemberForm from "../../components/MemberForm.jsx";

const initials = (name) => (name || "?").trim().slice(0, 1);

export default function MembersPage({ members, setMembers }) {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [query, setQuery] = useState("");

  function saveMember(value) {
    if (editing) {
      setMembers((items) => items.map((item) => item.id === editing.id ? { ...value, id: editing.id } : item));
    } else {
      const id = globalThis.crypto?.randomUUID?.() || `member-${Date.now()}`;
      setMembers((items) => [...items, { ...value, id }]);
    }
    setEditing(null);
    setShowForm(false);
  }

  function deleteMember(member) {
    if (!window.confirm(`「${member.name}」をメンバーから削除しますか？`)) return;
    setMembers((items) => items.filter((item) => item.id !== member.id));
  }

  const filtered = members.filter((member) => `${member.name} ${member.role} ${member.note}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="page-stack">
      <section className="page-intro"><div><span className="eyebrow">YOUR TRAVEL CREW</span><h1>メンバー一覧</h1><p>旅行に参加するメンバーの情報を管理します。</p></div><button className="button button-primary" onClick={() => { setEditing(null); setShowForm((v) => !v); }}>＋ メンバーを追加</button></section>
      {(showForm || editing) && <section className="section-block"><div className="section-heading"><h2>{editing ? "メンバーを編集" : "新しいメンバー"}</h2></div><MemberForm initialValue={editing} onSave={saveMember} onCancel={() => { setEditing(null); setShowForm(false); }} /></section>}
      <div className="toolbar"><div className="search-box"><span>⌕</span><input aria-label="メンバーを検索" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="名前や役割で検索" /></div><span className="result-count">{filtered.length} 人</span></div>
      <div className="member-grid">
        {filtered.map((member, index) => <article className="member-card" key={member.id}>
          <div className={`member-avatar avatar-${index % 4}`}>{initials(member.name)}</div><span className={`role-pill${member.role === "幹事" ? " role-admin" : ""}`}>{member.role}</span>
          <h2>{member.name}</h2><p className="member-contact">{member.contact || "連絡先未登録"}</p><p className="member-note">{member.note || "メモはありません。"}</p>
          <div className="member-actions"><button className="button button-secondary" onClick={() => { setShowForm(false); setEditing(member); }}>編集</button><button className="button button-ghost-danger" onClick={() => deleteMember(member)}>削除</button></div>
        </article>)}
      </div>
      {!filtered.length && <div className="empty-state"><strong>メンバーが見つかりません</strong><p>検索条件を変えるか、新しいメンバーを追加してください。</p></div>}
    </div>
  );
}
