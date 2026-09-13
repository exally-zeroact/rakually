/* supa-config.js — ★本番★ (rakually / Vercel配信＝rakually.vercel.app)
 * ★2026-09-13 直した★＝ここに ★テスト線の 覚書が そのまま 座っていた★
 *   （「テスト用DB」「本番には絶対にコピーしない」と 書いてある物が ★本番に 在った★）。
 *   09-12 の 本番投入で ★git archive|tar で テスト線を 丸ごと 重ねた★のが 元。
 *   値（url/key/env）は 09-13 に 戻したが ★字だけ 残っていた★＝次に 読む人が 必ず 誤解する。
 * ★倉庫は 2つ★（2026-09-13 実測。生きている 配信物 9本で 確かめた）
 *   PROD 本番（全アプリ） tnfwipbgfgjaymlszeid … ★この repo が 指す方★
 *     ＝ダイコメ本番・代行本番・飲み屋本番・Exally・Rakunally本番 が ここ
 *   TEST 試験（全アプリ） khawdrnvssdenumbiwfg
 *     ＝各アプリの テスト線が ここ（rakually-test も）
 *   ★倉庫は 1つに つき 1つの 環境／中で アプリごとに 部屋(schema)を 分ける★
 * URLとpublishable(公開鍵)はクライアント埋め込みで安全＝RLSで本人ぶんだけ保護。
 * ★このファイルは テスト線から 運ばない★＝scripts/ship-all.mjs の NEVER_SHIP に 入っている。
 *   ★守りは 在っても 通らない道が 在れば 素通りする★ので、置かれた結果も CI で 見る
 *   （tests/supa-config-env-matches-repo.test.mjs＝origin の名前と 名札が 合っているか）。
 * ★repo名やホスト名の「test」は環境の証拠にならない。証拠は ★下の url の文字★ だけ。
 *   確かめ方＝★配信されたJSを実際に読んで url を出す★（tests/pages-hosting.test.mjs D2 と同じ）。
 */
/* ★env = この配信がどの環境か（'test' | 'prod'）★
 *   画面の一番上に「テスト環境」の帯を出すかを、これ1つで決める（js/env-badge.js）。
 *   ★向き先を持っているのはこのファイルだけ★という約束（tests/no-hardcoded-supa.test.mjs）
 *   に合わせて、環境の名札もここに置く。他のファイルに倉庫の名前を書かせない。
 *   ★本番(rakually)の supa-config.js は env:'prod'。だから本番に帯は出ない。★
 *   ★2026-09-12〜09-13 の 約1日、ここが env:'test' に なっていて
 *     客の 入口に 茶色の帯「テスト環境／ここで入れた内容は本番には入りません」が 出ていた★
 *     （幸い その間 客は 1件も 入れておらず データの 分かれは 起きていない）。 */
window.SUPA = {
  url: 'https://tnfwipbgfgjaymlszeid.supabase.co',
  key: 'sb_publishable_UHPc5Vh6jMsMA-EXmITHig_KvZC0sQe',
  env: 'prod'
};
