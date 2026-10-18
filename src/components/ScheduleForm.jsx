import { useEffect, useState } from "react";

const emptyForm = {
  title: "",
  date: "",
  time: "",
  location: "",
  category: "観光",
  description: "",
};

export default function ScheduleForm({ initialValue, onSave, onCancel }) {
  const [form, setForm] = useState(initialValue || emptyForm);

  useEffect(() => {
    setForm(initialValue || emptyForm);
  }, [initialValue]);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.title.trim() || !form.date) return;
    onSave({ ...form, title: form.title.trim(), location: form.location.trim() });
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field field-wide">予定名 <span className="required">必須</span>
          <input value={form.title} onChange={(e) => update("title", e.target.value)} required maxLength={100} placeholder="例：ホテルにチェックイン" />
        </label>
        <label className="field">日付 <span className="required">必須</span>
          <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} required />
        </label>
        <label className="field">時刻
          <input type="time" value={form.time} onChange={(e) => update("time", e.target.value)} />
        </label>
        <label className="field">場所
          <input value={form.location} onChange={(e) => update("location", e.target.value)} maxLength={100} placeholder="場所・集合地点" />
        </label>
        <label className="field">カテゴリ
          <select value={form.category} onChange={(e) => update("category", e.target.value)}>
            {["集合", "移動", "観光", "食事", "宿泊", "その他"].map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
        <label className="field field-wide">詳細・メモ
          <textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows="3" maxLength={1000} placeholder="持ち物や補足など" />
        </label>
      </div>
      <div className="form-actions">
        <button type="button" className="button button-secondary" onClick={onCancel}>キャンセル</button>
        <button type="submit" className="button button-primary">保存する</button>
      </div>
    </form>
  );
}
