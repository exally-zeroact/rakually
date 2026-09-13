/* supa-config.js — ★本番★ (rakually / Vercel配信＝rakually.vercel.app)
 * ★2026-09-13 直した★＝ここに ★テスト線の 覚書が そのまま 座っていた★
 *   （「テスト用DB」「本番には絶対にコピーしない」と 書いてある物が ★本番に 在った★）。
 *   09-12 の 本番投入で ★git archive|tar で テスト線を 丸ごと 重ねた★のが 元。
 *   値（url/key/env）は 09-13 に 戻したが ★字だけ 残っていた★＝次に 読む人が 必ず 誤解する。
 * ★倉庫は 2つ★（2026-09-13 実測。生きている 配信物 9本で 確かめた）
 *   「PROD 本番（全アプリ）」… ★この repo が 指す方★（下の url が それ）
 *     ＝ダイコメ本番・代行本番・飲み屋本番・Exally・Rakunally本番 が ここ
 *   「TEST 試験（全アプリ）」… 各アプリの テスト線（rakually-test も）
 *   ★倉庫は 1つに つき 1つの 環境／中で アプリごとに 部屋(schema)を 分ける★
 * ★★ここに ★反対側の 倉庫の 名前（ref の 字）★を 書かない★★（2026-09-14）
 *   書いたら ★その日のうちに 自分で 消した★＝字で 数える 道具が
 *   「本番の 紙に 試験の 倉庫が 書いてある」と 読んで ★偽の 赤★を 出す。
 *   （同じ形を Castally の 紙でも 見つけた＝指示役1 2026-09-14）
 *   ⇒ ★名前（PROD／TEST）で 書く。ref の 字は 下の window.SUPA だけが 持つ★
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
