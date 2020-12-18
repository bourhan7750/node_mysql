// DB の connect 処理をモジュールにして読み込む
const db = require('./lib/db');

//db: connect()
const con = db.connect();
const first_name='uddin';
const last_name='bourhan';
const id=1;
let params=[first_name,last_name,id];
const sql='UPDATE users SET first_name=?,last_name=? WHERE id=?';
con.query(sql, params, (err, results) => {
    if (err) throw err;
    console,log(results);
    console.log('update success.');
})

//DB接続終了
con.end();

// params = [ { 'email': 'tanaka@test.com' } , { 'email': 'tanaka@example.com' }];
// sql = 'UPDATE users SET ? WHERE ?;';