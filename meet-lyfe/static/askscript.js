//imported from api
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

function writeNavHeading(num)
{
    let q = questions[num];
    return `<p id = "q${num}" class = "q light">#${num}: ${q.title}</p>`;
}

function displayQ(h)
{
    let num = parseInt(h.substring(22,h.indexOf(':')));
    let q = questions[num];
    id('askcontainer').innerHTML = 
    `
    <h2>#${num}: ${q.title}</h2>
    <p class="qpar">${q.body}</p>
    <p class="author">Asked by ${q.a ? 'anonymous' : q.author}</p>
     ${q.replies.map(r => `<p><b>${r.author}</b> says:</p> <p>${r.reply}</p>`).join('')}
    `
}

//init setup
let qstr = '';
x = Object.keys(questions).sort(function(a,b){return b - a});
x.forEach(n => qstr += writeNavHeading(n));
id('qlist').innerHTML = qstr;
for(const i in x)
{
    id(`q${x[i]}`).onclick = function() {displayQ(x[i])};
}

//most recent q auto-displays
displayQ(x[0]);

function id(n)
{
    return document.getElementById(n);
}