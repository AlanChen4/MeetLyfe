import {data} from '../../data.js';

export default function handler(request, response) {
    const { method } = request;
  
    if (method === "GET") {
      const { id } = request.query;
  
      const question = data.find((question) => question.id.toString() === id);
  
      if (!question) {
        return response.status(400).json("Question not found");
      }
  
      return response.status(200).json(question);
    }
  }