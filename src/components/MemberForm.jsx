import { useEffect, useState } from "react";

const emptyForm = { name: "", role: "参加者", contact: "", note: "" };

export default function MemberForm({ initialValue, onSave, onCancel }) {
  const [form, setForm] = useState(initialValue || emptyForm);

  useEffect(() => {
    setForm(initialValue || emptyForm);
  }, [initialValue]);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim()) return;
    onSave({ ...form, name: form.name.trim(), contact: form.contact.trim(), note: form.note.trim() });
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field field-wide">名前 <span className="required">必須</span>
          <input value={form.name} onChange={(e) => update("name", e.target.value)} required maxLength={60} placeholder="名前・ニックネーム" />
        </label>
        <label className="field">役割
          <select value={form.role} onChange={(e) => update("role", e.target.value)}>
            <option>参加者</option><option>幹事</option><option>運転担当</option><option>その他</option>
          </select>
        </label>
        <label className="field">連絡先（任意）
          <input value={form.contact} onChange={(e) => update("contact", e.target.value)} maxLength={120} placeholder="メールなど（任意）" />
        </label>
        <label className="field field-wide">メモ
          <textarea value={form.note} onChange={(e) => update("note", e.target.value)} rows="3" maxLength={500} placeholder="共有しておきたいこと" />
        </label>
      </div>
      <div className="form-actions">
        <button type="button" className="button button-secondary" onClick={onCancel}>キャンセル</button>
        <button type="submit" className="button button-primary">保存する</button>
      </div>
    </form>
  );
}
