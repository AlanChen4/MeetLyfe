import axios from 'axios';
import {data} from './data';

export default function QuestionPost()
{
    function newQuestion()
    {
       return (<div id = "askcontainer">
                <h2>New Question</h2>
                <span><input type="checkbox" id="anonycheck"/> anonymous</span>
                <br/>
                <input type="text" id = "newqtitle" placeholder="Title of question"/>
                <br/>
                <textarea id = "newqtext" placeholder="Type question here..." className='replyarea'>{}</textarea>
                <br/>
                <button className = "btn primary" id = 'sendQ' onClick = {function() {
                    //TODO do tags
                    console.log('triggered method');
                    let newqtext = document.getElementById('newqtext').value;
                    let toSend = {
                        title : document.getElementById('newqtitle').value,
                        a : document.getElementById('anonycheck').value == 'on',
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
                }}>Send</button>
            </div>
       )
    }

    return(
        <div>
            {newQuestion()} 
       </div>
    )
}