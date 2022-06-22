//imported from api
import Header from '../components/Header';
import { useState, useEffect } from 'react';

//local vars
let questions = {
1: {
    title : 'What truly, really, is JavaScript?',
    author : 'Michael Phillips',
    body : "I don't understand what JavaScript is. Is it a language or something?",
    a : true,
    replies : [{author : 'Brandon Kaminski', reply : 'yes lmao get good'}],
},
2: {
    title : 'Why are we here?',
    author : 'Michael Phillips',
    body : "Just to suffer? Nah, we're vibing",
    a: true,
    replies : [],
},
3: {
    title : 'What is this?',
    author : 'Brandon Kaminski',
    body : "Anyone know?",
    a : false,
    replies : [],
},
4: {
    title : 'MetLife is how old?',
    author : 'Alan Chen',
    body : "I was trying to figure it out the other day.",
    a : false,
    replies : [{author: 'Brandon Kaminski', reply: 'it was founded in 1868'}],
},
}

// function id(n)
// {
// return document.getElementById(n);
// }

//page render
export default function Ask()
{
    //init setup
    let x = Object.keys(questions).sort(function(a,b){return b - a});
    //state vars
    const [currentQ, setCurrentQ] = useState(x[0]);


    function getQlist()
    {
        let qstr = '';
        qstr = x.map(n => writeNavHeading(n));
        console.log(qstr);
        return <div id = 'qlist'>{qstr}</div>
    }

    //functions
    function writeNavHeading(num)
    {
        let q = questions[num];
        let jsx = <p id = {'q' + num} key = {'q' + num} className = "q light" onClick = {function() {displayQ(currentQ)}}> #{num}: {q.title}</p>;
        return jsx;
    }

    function displayQ(num)
    {
        useEffect(() => {
            setCurrentQ(num);
          }, []);
        console.log(currentQ);
        let q = questions[num];
        return(
            <div id = "askcontainer">
                <h2>#{num}: {q.title}</h2>
                <p className="qpar">{q.body}</p>
                <p className="author">Asked by {q.a ? 'anonymous' : q.author}</p>
                {q.replies.map(r => <div className="reply"><p><b>{r.author}</b> says:</p> <p>{r.reply}</p></div>)}
            </div>
        );
    }

    return (
        <div id = "fullbody">
            <Header/>
            <div id="qbar">
                <div>
                    <h2>Questions</h2>
                    {getQlist()}
                </div>
            </div>
            <div id="mainask" className="main light">
                {displayQ(currentQ)}
            </div>
        </div>
    )
}