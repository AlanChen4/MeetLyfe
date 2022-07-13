import {data} from '../../data.js';
import Header from '../../../components/Header.js';
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
const fs = require('fs');

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

    
    if (method === "POST") {
      const { id } = request.query;
      const { body } = request;
  
      let question = data.find((question) => question.id.toString() === id);
      question = question.replies;

      const fileName = '../../../data/file.json';    
      const file = require(fileName);   
      file.key = JSON.stringify(file);  
      //file.key
      fs.writeFile(fileName, JSON.stringify(body), function writeJSON(err) {
      if (err) return console.log(err);  
      // console.log(JSON.stringify(file));      
      // console.log('writing to ' + fileName);   
      });
      

      if (!question) {
        return response.status(400).json("Question not found");
      }
      
      //pass
      let obj = <div><Header/><p>{question.id}: {question.title} is here</p></div>

      return response.status(200).json(file);//send(ReactDOMServer.renderToStaticMarkup(obj));
    }
  }