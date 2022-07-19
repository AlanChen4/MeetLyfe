const fs = require('fs');
const questions = require('../questions.json');

export default function handler(req, res) {
  if (req.method == 'POST') {
    // extract request data from body
    const reqData = req.body;

    // add reply from the POST request
    for (const question of questions) {
      if (question.id == reqData.questionId) {
        question.replies.push({reply: reqData.reply, author: reqData.author, dateposted : reqData.dateposted});
      }
    }
    
    // write changes to json file
    fs.writeFileSync('./pages/api/questions.json', JSON.stringify(questions, null, 4));

    res.status(200).json({ message: 'success' });
  }
}