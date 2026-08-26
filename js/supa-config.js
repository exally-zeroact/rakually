/* supa-config.js — ★本番の倉庫★ (rakually / Vercel配信＝rakually.vercel.app)
 * ★ここは本番★。テスト線(rakually-test)は別の Supabase「DB-test」を指す。
 * URLとpublishable(公開鍵)はクライアント埋め込みで安全＝★守るのは RLS★。
 * ★この値は 指示役が Supabase から直に取り出して渡した物★（2026-08-26）。
 *   ＝作る側が exally や記憶から写す事はしない（写し間違いを作らない）。
 * ★repo名やホスト名の「test / 本番」は環境の証拠にならない。証拠は ★下の url の文字★ だけ。
 *   確かめ方＝★配信されたJSを実際に読んで url を出す★。
 */
/* ★env = この配信がどの環境か★
 *   画面の一番上に「テスト環境」の帯を出すかを、これ1つで決める（js/env-badge.js）。
 *   ★向き先を持っているのはこのファイルだけ★／環境の名札も ここに置く。
 *   ★ここは本番だから 帯は出ない★＝本番に「テスト環境」の帯を出さない（嘘の帯を作らない）。
 *   ★読み手は scripts/repo-env.mjs 1本★／★tests/env-badge.test.mjs が毎回 見ている★ */
window.SUPA = {
  url: 'https://tnfwipbgfgjaymlszeid.supabase.co',
  key: 'sb_publishable_UHPc5Vh6jMsMA-EXmITHig_KvZC0sQe',
  env: 'prod'
};
