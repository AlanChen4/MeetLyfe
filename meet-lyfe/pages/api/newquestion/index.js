const fs = require('fs');
const questions = require('../questions.json');

export default function handler(req, res) {
  if (req.method == 'POST') {
    // extract request data from body
    const reqData = req.body;

    // add qdata from the POST request
    const updated = questions.push({
      "id": questions.length + 1,
      "title": reqData.title,
      "author": "TEMP_AUTHOR",
      "body": reqData.body,
      "a": reqData.a,
      "replies": []
    });
    
    // write changes to json file
    fs.writeFileSync('./pages/api/questions.json', JSON.stringify(updated, null, 4));

    res.status(200).json({ message: 'success' });
  }
}