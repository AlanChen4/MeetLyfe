const fsp = require('fs').promises;
const path = require('path');
export default async function (req, res) {
  try {
    const file_data = await fsp.readFile(path.join(process.cwd(), 'data/data.json'))//path.join(path.dirname((__dirname)), 'data.json'))
    const json_data = JSON.parse(file_data);
    // Do stuff
    if (method === "GET") {
        return res.status(200).json(json_data);
    }
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ err: `${error}` })
  }
} 


// import {data} from '../../data.js';

// export default function handler(request, response) {
//   const { method } = request;

//   if (method === "GET") {
//     return response.status(200).json(data);
//   }

//   if (method === "POST") {
//     const { body } = request;
//     data.push({ ...body, id: data.length + 1 });
//     return response.status(200).json(data);
//   }
// }