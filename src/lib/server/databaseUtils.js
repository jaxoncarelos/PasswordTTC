import sqlite3 from "sqlite3";

export function viewAllPasswords() {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database("./src/lib/server/database.db", (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Connected to the database.");
      }
    });

    db.all(`SELECT * FROM passwords;`, (err, rows) => {
      console.log(rows);
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}
export function savePassword(password) {
  return new Promise((resolve, reject) => {
    console.log(password);
    let db = new sqlite3.Database("./src/lib/server/database.db", (err) => {
      if (err) {
        z;
        console.error(err.message);
      } else {
        console.log("Connected to the database.");
      }
    });
    let stmt = db.prepare(
      `INSERT INTO passwords(key, count) VALUES(?, ?) ON CONFLICT (key) DO UPDATE SET count = count + 1;`
    );

    stmt.run([password.passwordValue, 1], function (err) {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
}
