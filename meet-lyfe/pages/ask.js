//imported from api
import Header from '../components/Header';

//local vars
export let data = [
{
    id: 1,
    title : 'What truly, really, is JavaScript?',
    author : 'Michael Phillips',
    body : "I don't understand what JavaScript is. Is it a language or something?",
    a : true,
    replies : [{author : 'Brandon Kaminski', reply : 'yes lmao get good'}],
},
{
    id: 2,
    title : 'Why are we here?',
    author : 'Michael Phillips',
    body : "Just to suffer? Nah, we're vibing",
    a: true,
    replies : [],
},
{
    id: 3,
    title : 'What is this?',
    author : 'Brandon Kaminski',
    body : "Anyone know?",
    a : false,
    replies : [],
},
{
    id : 4,
    title : 'MetLife is how old?',
    author : 'Alan Chen',
    body : "I was trying to figure it out the other day.",
    a : false,
    replies : [{author: 'Brandon Kaminski', reply: 'it was founded in 1868'}],
},
]

//page render
export default function Ask()
{
    //init setup
    let x = questions.sort(function(a,b){return b.id - a.id});
    console.log(x);

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
        console.log(q);
        let jsx = <p id = {'q' + num} key = {'q' + num} className = "q light" onClick = {function() {}}> #{num}: {q.title}</p>;
        return jsx;
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
                {displayQ(x[2].id)}
            </div>
        </div>
    )
}