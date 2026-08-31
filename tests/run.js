/* run.js — Rakunally の共通部分のテストを全部走らせる(依存ゼロ・node だけ)
 *   node tests/run.js
 * 各テストファイルは自分で実行して、失敗があれば exit 1 を返す約束。
 *
 * ★2026-08-17 rakually-test を立てた時に外した物（外した理由と戻す条件）★
 *   下の10本は ★Exally のブック(book.html)と式エンジン(exally-formula.js)★ を見る物で、
 *   その2つは Rakunally に持って来ていない（司さん「Exally には要らん機能やろが」の裏返し）。
 *   ＝★見る物がディスクに無い★ので、置いておくと ENOENT で必ず赤になる（黙って飛ばす作りにはしない）。
 *     grid-xlsx / grid-date(+self) / grid-colwidth(+self) / grid-refedit(+self) / grid-edit-ui /
 *     excel-version(+self) / xlsx-harness の8本 / no-silent-optional
 *   ★戻す条件★: Rakunally に表(ブック)を置くと決めた日。その時 lib/grid-*.js・lib/xlsx-io.js・
 *     lib/excel-version.js・tests/xlsx-harness/ を Exally 側から運び直して、この一覧に戻す。
 *   ★残した物★: book-open.test.mjs（zip直編集の3本＝lib/zip-surgeon.js・lib/xlsx-edit.js を見る。
 *     この2本は ★seikyu/lib/seikyu-book.js が require している★＝Rakunally で生きている）
 */
'use strict';
const { execFileSync } = require('child_process');
const path = require('path');

const FILES = [
  'suite-data.test.js',     // E0 共有データ層の契約
  /* ★2026-08-18 集計(E1/E5)と台帳(E2)の3本を外した★＝Exally の物なので入口から外した
     （aggregate.test.js / ledger-source.test.js / cross-agg.test.js・見る lib ごと外した）。
     ★戻す条件★＝Rakunally に台帳/集計を置く日。lib とテストとCIの登録をまとめて戻す。 */
  'hub-ui.mjs',             // 入口(index.html) UI 全ボタン(jsdom)
  'no-dark-green.test.mjs',  // ★使わないと決めた濃い緑が戻っていないか(緑は全アプリ #2E7D54 だけ)
  ['no-dark-green.test.mjs', '--self-test'],
  // ★配信の置き方で壊れる書き方＋本番倉庫への誤接続を止める恒久ガード
  'env-badge.test.mjs',      // ★テスト環境の帯(本番に出さない・全画面に入っている)
  ['env-badge.test.mjs', '--self-test'],
  /* ★2026-08-18 api/claude.js（Exallyのチャットのサーバ側）ごと外した★
     ・どの画面からも呼ばれていない（chat.html は持って来ていない）
     ・中の文が「あなたはExally（エクサリー）という…」＝★Exally の物★
     ・★聞いて選ばすは AIを使わない（ルールベース）★ので この先も要らない
     ・一緒に外した物: tests/api-claude.test.mjs／vercel.json の /api/claude の書き換え／
       package.json の @anthropic-ai/sdk
     ★戻す条件★＝Rakunally でサーバ側のAIを使うと決めた日 */
  'no-hardcoded-supa.test.mjs',           // ★倉庫の向き先を js/supa-config.js 以外に書かせない(テストrepoが本番倉庫を触る事故)
  ['no-hardcoded-supa.test.mjs', '--self-test'], // ★わざと壊して赤になるか＋誤検知が出ないか
  'ios-unsupported.test.mjs',   // ★iPhoneで動かない書き方(type=month/octet-stream/writeFile/Blob散在)
  ['ios-unsupported.test.mjs', '--self-test'],
];

let ng = 0;
for (const f of FILES) {
  const [file, ...args] = Array.isArray(f) ? f : [f];
  console.log('\n=== ' + file + (args.length ? ' ' + args.join(' ') : '') + ' ===');
  try { execFileSync(process.execPath, [path.join(__dirname, file), ...args], { stdio: 'inherit' }); }
  catch (e) { ng++; }
}
console.log('\n' + (ng ? '★ ' + ng + ' ファイルで失敗' : '全テストファイル 緑'));
process.exit(ng ? 1 : 0);
