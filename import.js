const admin = require('firebase-admin');
const fs = require('fs');
var crypto = require('crypto');

var serviceAccount = require('./ksycards-9e0c907eb027.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

const buffer = fs.readFileSync('input.txt');

let rawString = buffer.toString().replace(/\t/, '');

const split = rawString.split(/\[.+\]/);

const s = split.map(x => x.split(/\n/g));

const qa = s.map(x => {
  const question = x[0];
  let answer = '';
  let first = true;
  x.forEach(line => {
    if (!first) {
      answer += line + '\n';
    }
    first = false;
  });
  return { question, answer };
});

qa.forEach(x => {
  const hash = crypto
    .createHash('md5')
    .update(JSON.stringify(x))
    .digest('hex');

  db.collection('cards')
    .doc(hash)
    .set(Object.assign(x, { id: hash }));
});
