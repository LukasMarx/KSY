const admin = require('firebase-admin');
const fs = require('fs');

var serviceAccount = require('./ksycards-9e0c907eb027.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let snapshot;
db.collection('cards')
  .get()
  .then(s => {
    arr = [];
    s.forEach(doc => {
      let data = doc.data();
      arr.push({
        question: data.question.replace(/^ +/gm, ''),
        answer: data.answer ? data.answer.replace(/^ +/gm, '').replace(/\t/g, '') : ''
      });
    });

    fs.writeFileSync('questions.json', JSON.stringify(arr));
  });
