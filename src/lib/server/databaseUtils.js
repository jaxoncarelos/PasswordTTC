import sqlite3 from 'sqlite3';
export let db

export function openDatabase(){
  db = new sqlite3.Database('../db/passwordttc', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Working as intended")
  });
}


export function viewAllPasswords() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM passwords;`, (err, rows) => {
      if(err) {
        reject(err)
      }
      resolve(rows)
    })
  })
}
export function savePassword(password) {
   return new Promise((resolve, reject) => {
     db.run(`INSERT INTO passwords(key) VALUES(?) ON CONFLICT (key) DO UPDATE SET value = value + 1;`, [password], function(err) {
       if (err) {
         reject(err);
       }
       resolve(true);
     });
   });
 }