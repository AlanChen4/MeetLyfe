import {data} from '../../data.js';
import Header from '../../../components/Header.js';
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

export default function handler(request, response) {
    const { method } = request;
  
    if (method === "GET") {
      const { id } = request.query;
  
      const question = data.find((question) => question.id.toString() === id);
  
      if (!question) {
        return response.status(400).json("Question not found");
      }
      
      //pass
      let obj = <div><Header/><p>{question.id}: {question.title} is here</p></div>

      return response.status(200).json(question);//send(ReactDOMServer.renderToStaticMarkup(obj));
    }
  }