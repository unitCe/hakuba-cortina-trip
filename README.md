# TripNote - グループ旅行管理アプリ

React + JavaScript + Vite + React Router を使ったサンプルアプリです。

## 含まれる機能
- ホーム、予定一覧、予定詳細、メンバー一覧、設定の5画面
- ページ内リンクとブラウザの戻る・進む
- 予定とメンバーの追加、編集、削除
- 予定・メンバー検索
- localStorage への保存（同じブラウザ内のみ）
- スマートフォン・PC向けレスポンシブデザイン
- Cloudflare Pages 用の SPA リダイレクト設定

## Windows / VS Code で起動する
1. この ZIP を展開します。
2. VS Code で展開した `MyGroupApp` フォルダーを開きます。
3. 「ターミナル」→「新しいターミナル」を選びます。
4. 次を実行します。

   ```powershell
   npm.cmd install
   ```

5. インストールが終わったら、次を実行します。

   ```powershell
   npm.cmd run dev
   ```

6. ターミナルに表示される `http://localhost:5173/` をブラウザで開きます。
7. 終了するときはターミナルで `Ctrl + C` を押します。

## 本番ビルドの確認
```powershell
npm.cmd run build
npm.cmd run preview
```

## Cloudflare Pages の設定（公開するとき）
- GitHub リポジトリを作成してソースを push
- Cloudflare Pages で GitHub リポジトリを接続
- Build command: `npm run build`
- Build output directory: `dist`

## 現時点の制限
- データはブラウザの localStorage に保存されます。別端末・別ユーザーとの共有は未実装です。
- ログイン、ユーザー権限、クラウドデータベースは未実装です。
- 連絡先欄はサンプル入力欄であり、外部送信はしません。


## 旅行ガイドページ

`/trip-guide` に「白馬コルチナ スノーボード旅行」の旅行ガイドを追加しました。日程、宿泊施設、費用、追加費用の目安、昨年の雪のメモ、公式サイト・地図へのリンクを確認できます。銀行口座情報は未設定の表示にしてあります。公開サイトに口座番号などの個人情報を掲載しないでください。

このアプリの予定・メンバー・設定の編集内容はブラウザの localStorage に保存されます。ログイン、複数端末間の同期、共有データベースは実装されていません。
