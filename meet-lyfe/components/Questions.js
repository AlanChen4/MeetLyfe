import { useEffect, useState } from "react";
import axios from "axios";

export default function Questions(props) {
  const questions = props.questions;


  // search questions by their respective questionId
  const getQuestionById = (questionId) => {
    for (const question of questions) {
      if (question.id == questionId) {
        return question;
      }
    }
  }

  // author is the person replying, questionId is of the question being responded to
  const replyQuestion = (reply, author, questionId) => {
    // TODO: setup auth to determine correct author
    const replyData = {
      'reply': reply,
      'author': 'TEMP_AUTHOR',
      'questionId': questionId,
    }
    axios.post('/api/reply/', replyData);
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
  }, [questionId]) //all state vars in 2nd param get updated on every re-render (since react updates automatically)

  return (
   <div className="row">
     {/* Sidebar containing questions */}
     <div className="col-md-3">
       <h2 className="text-center p-3">Questions</h2>
       <div className="list-group list-group-flush border-bottom overflow-auto">
        {/* Newquestion appear */}
        <div className="list-group-item list-group-item-action py-3 lh-tight" key="newq">
          <div className="d-flex w-100 align-items-center">
            <button  className="btn-primary w-100" data-toggle="modal" data-target="#newqmodal" >New Question...</button>
          </div>
          <small className="ms-auto"></small>
        </div>
         {questions.sort((a, b) => b.id - a.id).map((item, index) => {
           return (
             <div className="list-group-item list-group-item-action py-3 lh-tight" key={index} onClick={() => {setQuestionId(item.id)}}>
              <div className="d-flex w-100 align-items-center">
                <strong className="mb-1">{item.title}</strong>
              </div>
              <small className="ms-auto">{`#${item.id} | ${item.author}`}</small>
             </div>
           )
         })}
       </div>
     </div>

     {/* Main content showing question in focus */}
     <div className="col-md-9 p-3">
       {/* details related to question in focus */}
       <div className="mb-3">
         <h2 className="mb-3">{currQuestion ? currQuestion.title : ''}</h2>
         <p>{currQuestion ? currQuestion.body : ''}</p>
         <p className="mb-3">Asked by {currQuestion ? currQuestion.author : ''}</p>
         <textarea className="form-control w-75" placeholder="Type your reponse here..." onChange={(event) => setReply(event.target.value)}/>
         <button className="btn btn-dark" onClick={() => replyQuestion(reply, '', questionId)}>Reply</button>
       </div>
       {/* reply thread */}
       <div className="mb-3">
         <p><strong>Replies ({currQuestion ? currQuestion.replies.length : ''})</strong></p>
         {currQuestion ? currQuestion.replies.map((reply, index) => {
           return (
             <div className="card p-3 mb-2 w-75" key={index}>
               <p><strong>{reply.author} said</strong></p>
               <p>{reply.reply}</p>
             </div>
           )
         }) : ''}
       </div>
     </div>
     {/* modal */}
     <div id = "newqmodal" className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}