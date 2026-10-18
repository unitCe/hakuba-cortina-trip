import { useState } from "react";

export default function SettingsPage({ settings, setSettings, onReset }) {
  const [form, setForm] = useState(settings);
  const [saved, setSaved] = useState(false);

  function update(field, value) {
    setSaved(false);
    setForm((current) => ({ ...current, [field]: value }));
  }

  function save(event) {
    event.preventDefault();
    setSettings(form);
    setSaved(true);
  }

  function resetSample() {
    if (!window.confirm("予定・メンバー・設定をすべて初期サンプルに戻しますか？この操作は取り消せません。")) return;
    onReset();
    setForm({ tripName: "白馬コルチナ スノーボード旅行", description: "みんなで楽しむ冬のグループ旅行", startDate: "2027-01-09", endDate: "2027-01-11" });
    setSaved(true);
  }

  return (
    <div className="page-stack">
      <section className="page-intro"><div><span className="eyebrow">PREFERENCES</span><h1>設定</h1><p>旅行の基本情報やアプリのデータを管理します。</p></div></section>
      <section className="settings-panel"><div className="panel-heading"><div className="panel-icon">✎</div><div><h2>旅行の基本情報</h2><p>ホーム画面に表示する情報を編集できます。</p></div></div>
        <form className="form-card settings-form" onSubmit={save}>
          <label className="field">旅行名 <span className="required">必須</span><input value={form.tripName} onChange={(e) => update("tripName", e.target.value)} required maxLength={100} /></label>
          <label className="field">説明<textarea rows="3" value={form.description} onChange={(e) => update("description", e.target.value)} maxLength={500} /></label>
          <div className="form-grid">
            <label className="field">開始日<input type="date" value={form.startDate} onChange={(e) => update("startDate", e.target.value)} /></label>
            <label className="field">終了日<input type="date" value={form.endDate} min={form.startDate || undefined} onChange={(e) => update("endDate", e.target.value)} /></label>
          </div>
          <div className="form-actions"><button className="button button-primary" type="submit">設定を保存</button></div>
          {saved && <p className="success-message" role="status">変更を保存しました。</p>}
        </form>
      </section>
      <section className="settings-panel"><div className="panel-heading"><div className="panel-icon amber-icon">↻</div><div><h2>サンプルデータをリセット</h2><p>予定・メンバー・設定を初期状態に戻します。</p></div></div><div className="reset-row"><p>登録した変更内容も削除されます。</p><button className="button button-danger" onClick={resetSample}>初期状態に戻す</button></div></section>
      <section className="settings-panel"><div className="panel-heading"><div className="panel-icon green-icon">✓</div><div><h2>データ保存について</h2><p>このサンプルアプリの保存仕様</p></div></div><ul className="info-list"><li>データは現在のブラウザの localStorage に保存されます。</li><li>同じ端末・同じブラウザであれば、再読み込み後もデータが残ります。</li><li>別の端末や別ユーザーとの自動共有・同期は未実装です。</li><li>ログイン機能、権限管理、クラウドデータベースは未実装です。</li></ul></section>
    </div>
  );
}
