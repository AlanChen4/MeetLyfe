//imported from api
import Header from '../components/Header';
import { data } from './data';
import axios from 'axios';
import react from 'react';
import ReactDOMServer from 'react-dom/server';

//page render
export default function Ask()
{ 
    //current q text
    let qtext = '';
    //init setup
    let x = data.sort(function(a,b){return b.id - a.id});
    function getQlist()
    {
        let qstr = '';
        qstr = x.map(n => writeNavHeading(n.id));
        return <div id = 'qlist'>{qstr}</div>
    }

    //functions
    function writeNavHeading(num)
    {
        let q = x.find(f => f.id == num);
        let jsx = <p id = {'q' + num} key = {'q' + num} className = "q light" onClick = {function() {getQ(num)}}> #{num}: {q.title}</p>;
        return jsx;
    }

    function getQ(num)
    {
        let y = {};
        axios.get('/api/questions/' + num, {})
            .then(function (response) {
            y = response.data;
            document.getElementById('mainask').innerHTML = ReactDOMServer.renderToStaticMarkup(displayQ(num));
            }
        );    
        
    }

    function sendNewQ()
    {
        //TODO do tags
        console.log('triggered method');
        let newqtext = document.getElementById('newqtext').value;
        let toSend = {
            title : document.getElementById('newqtitle').value,
            a : document.getElementById('anonycheck').value,
            body : newqtext,
            author : 'Brandon Kaminski',
            replies : [],
        }
        if(newqtext.length > 0)
        {
            axios.post('/api/questions/', toSend)
                .then(function (response) {
                    console.log(response);
                }
            ); 
        }
    }

    function sendNewR(num)
    {
        //TODO do tags
        
        let replytext = document.getElementById('thisreply').value;
        console.log('triggered method', num);
        console.log(replytext);
        if(replytext.length > 0)
        {
            axios.get('/api/questions/' + num, {})
                .then(function (response) {
                    let gets = response.data.replies;
                    console.log(gets);
                    gets.push({author: 'Brandon Kaminski', reply: replytext})
                    axios.post('/api/questions/' + num, gets)
                        .then(function (response) {
                            console.log(response);
                        }
                    );  
                }
            ); 
        }
    }

    function newQuestion()
    {
       let jsx = <div id = "askcontainer">
                <h2>New Question</h2>
                <span><input type="checkbox" id="anonycheck"/> anonymous</span>
                <br/>
                <input type="text" id = "newqtitle" placeholder="Title of question"/>
                <br/>
                <textarea id = "newqtext" placeholder="Type question here..." className='replyarea'>{qtext}</textarea>
                <br/>
                <button className = "btn primary" id = 'sendQ' onClick = {function() {sendNewQ()}}>Send</button>
            </div>
         document.getElementById('mainask').innerHTML = ReactDOMServer.renderToStaticMarkup(jsx);
         
    }


    function displayQ(num)
    {
        let q = x.find(f => f.id == num);
        return(
            <div id = "askcontainer">
                <h2>#{num}: {q.title}</h2>
                <p className="qpar">{q.body}</p>
                <p className="author">Asked by {q.a ? 'anonymous' : q.author}</p>
                
                <textarea id='thisreply' placeholder = {q.a ? 'Reply here...' : `Reply to ${q.author} here...`} className='replyarea'/>
                <br/>
                <button onClick={function() {sendNewR(num)}} className='btn btn-primary mb-4'>Send</button>
                <p id='replies'>Replies ({q.replies.length})</p>
                {q.replies.map(r => 
                <div className="card mb-2">
                    <div className = 'card-body'>
                        <p className = "card-text"><b>{r.author}</b> says:<br/>{r.reply}</p>
                    </div>
                </div>
                )}
                
            </div>
        );
    }

    return (
        <div id = "fullbody">
            <Header/>
            <div className = "row">
                <div id="qbar" className="col-3">
                    <div>
                        <h2>Questions</h2>
                        <p id = 'newqbar' className = 'q light' onClick={function() {newQuestion()}}>New Question...</p>
                        {getQlist()}
                    </div>
                </div>
                <div id="mainask" className="main light col-9">
                    {displayQ(x[0].id)}
                </div>
            </div>
        </div>
    )
}