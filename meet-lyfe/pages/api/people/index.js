const people = require('../people.json');

export default function handler(req, res) {
  if (req.method == 'GET') {
    res.status(200).json(people);
  }
}