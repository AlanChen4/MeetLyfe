const fs = require('fs');
const questions = require('../questions.json');

export default function handler(req, res) {
  if (req.method == 'GET') {
    res.status(200).json(questions);
  }

  else if (req.method == 'POST') {
     // extract request data from body
     const reqData = req.body;

     // add qdata from the POST request
     let updated = questions;
     updated.push({
       "id": questions.length + 1,
       "title": reqData.title,
       "author": reqData.author,
       "body": reqData.body,
       "a": reqData.a,
       "dateposted": reqData.dateposted,
       "replies": []
     });
     
     // write changes to json file
     fs.writeFileSync('./pages/api/questions.json', JSON.stringify(updated, null, 4));
    // TODO: write new reply data to json file 
    res.status(200).json({ message: 'Added new question' });
  }
}