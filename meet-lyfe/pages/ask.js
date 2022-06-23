//imported from api
import Header from '../components/Header';
import { data } from './data';
import axios from 'axios';
import react from 'react';
import ReactDOMServer from 'react-dom/server';

//page render
export default function Ask()
{ 
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
            });    
        
    }

    function displayQ(num)
    {
        let q = x.find(f => f.id == num);
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
                {displayQ(x[0].id)}
            </div>
        </div>
    )
}