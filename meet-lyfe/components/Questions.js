import { useEffect, useState } from "react";
import axios from "axios";
import {Button, Modal} from 'react-bootstrap';

export default function Questions(props) {
  const questions = props.questions;
  //for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //update this with new q logic 
  const postQuestion = function() {
    setShow(false);
    newQuestion(
      document.getElementById('newqtitle').value, 
      document.getElementById('newqtext').value, 
      document.getElementById('newqcheck').checked,
      new Date(),
      "Michael Phillips",
    );
    location.reload();
  };

  const dateStr = function(currQuestion) { 
  let s = `at ${new Date(currQuestion.dateposted).toTimeString().substring(0, 5)} on ${new Date(currQuestion.dateposted).toLocaleDateString()}`
   return s;
  }

  // search questions by their respective questionId
  const getQuestionById = (questionId) => {
    for (const question of questions) {
      if (question.id == questionId) {
        return question;
      }
    }
  }

  // author is the person replying, questionId is of the question being responded to
  const replyQuestion = (reply, author, date, questionId) => {
    // TODO: setup auth to determine correct author
    const replyData = {
      'reply': reply,
      'author': author,
      'dateposted' : date,
      'questionId': questionId,
    }
    axios.post('/api/reply/', replyData);
  }

  const newQuestion = (title, body, a, date, author) => {
    // TODO: setup auth to determine correct author
    const qData = {
      'title' : title,
      'author': author,
      'body' : body,
      'dateposted': date,
      'a': a,
    }
    axios.post('/api/questions/', qData);
  }

  // question ID sets the question in focus for the main container
  const [questionId, setQuestionId] = useState(questions.length);

  // used to keep track of response
  const [reply, setReply] = useState('');

  // used to keep track of current question in focus
  const [currQuestion, setCurrQuestion] = useState();

  // update current question in focus each time questionId changes
  useEffect(() => {
    setCurrQuestion(getQuestionById(questionId));
  }, [questionId]); //all state vars in 2nd param get updated on every re-render (since react updates automatically)

  return (
   <div className="row">
     {/* Sidebar containing questions */}
     <div className="col-md-3">
       <h2 className="text-center p-3">Questions</h2>
       <div className="list-group list-group-flush border-bottom overflow-auto">
        {/* Newquestion appear */}
        <div className="list-group-item list-group-item-action py-3 lh-tight" key="newq">
          <div className="d-flex w-100 align-items-center">
            <Button variant="primary" onClick={handleShow}>New Question...</Button>
          </div>
          <small className="ms-auto"></small>
        </div>
         {questions.sort((a, b) => b.id - a.id).map((item, index) => {
           return (
             <div className="list-group-item list-group-item-action py-3 lh-tight" key={index} onClick={() => {setQuestionId(item.id)}}>
              <div className="d-flex w-100 align-items-center">
                <strong className="mb-1">{item.title}</strong>
              </div>
              <small className="ms-auto">{`#${item.id} | ${item.a ? 'anonymous' : item.author}`}</small>
             </div>
           )
         })}
       </div>
     </div>

     {/* Main content showing question in focus */}
     <div className="col-md-9 p-3">
       {/* details related to question in focus */}
       <div className="mb-3">
         <h2 className="mb-3">{currQuestion ? "#" + currQuestion.id + ": " + currQuestion.title : ''}</h2>
         <p className="mb-3"><em>Asked by {currQuestion ? (currQuestion.a ? 'anonymous' : currQuestion.author) + " " + dateStr(currQuestion) : ''}</em></p>
         <p>{currQuestion ? currQuestion.body : ''}</p>
         <textarea className="form-control w-75" placeholder="Type your response here..." onChange={(event) => setReply(event.target.value)}/>
         <button className="btn btn-dark" onClick={() => replyQuestion(reply, 'Michael Phillips', new Date(), questionId)}>Reply</button>
       </div>
       {/* reply thread */}
       <div className="mb-3">
         <p><strong>Replies ({currQuestion ? currQuestion.replies.length : ''})</strong></p>
         {currQuestion ? currQuestion.replies.map((reply, index) => {
           return (
             <div className="card p-3 mb-2 w-75" key={index}>
               <p><strong>{reply.author} said</strong> <em>{dateStr(reply)}</em></p>
               <p>{reply.reply}</p>
             </div>
           )
         }) : ''}
       </div>
     </div>
        {/* modal */}
        <Modal centered = 'true' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='text' placeholder = 'Question Title...' id='newqtitle'/>
          <span><input type='checkbox' id='newqcheck'/> Post anonymously</span>
          <textarea placeholder = 'Ask your question...' id='newqtext'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={postQuestion}>
            Post Question!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}