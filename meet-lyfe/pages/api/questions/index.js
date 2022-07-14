const fs = require('fs');
const questions = require('../questions.json');

export default function handler(req, res) {
  if (req.method == 'GET') {
    res.status(200).json(questions);
  }

  else if (req.method == 'POST') {
    // TODO: write new reply data to json file 
    res.status(200).json({ message: 'Added new reply' });
  }
}