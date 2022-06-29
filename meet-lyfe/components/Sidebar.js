import Question from "./Question";

export default function Sidebar() {

    const questionsTest = [
        {'title': 'fake question 1', 'body': 'fake body 1', 'author': 'fake author 1'},
        {'title': 'fake question 2', 'body': 'fake body 2', 'author': 'fake author 2'},
        {'title': 'fake question 3', 'body': 'fake body 3', 'author': 'fake author 3'},
        {'title': 'fake question 4', 'body': 'fake body 4', 'author': 'fake author 4'},
        {'title': 'fake question 5', 'body': 'fake body 5', 'author': 'fake author 5'},
        {'title': 'fake question 6', 'body': 'fake body 6', 'author': 'fake author 6'},
        {'title': 'fake question 7', 'body': 'fake body 7', 'author': 'fake author 7'},
        {'title': 'fake question 8', 'body': 'fake body 8', 'author': 'fake author 8'},
        {'title': 'fake question 9', 'body': 'fake body 9', 'author': 'fake author 9'},
        {'title': 'fake question 10', 'body': 'fake body 10', 'author': 'fake author 10'},
    ];

    return (
        <div className="bg-dark d-flex flex-column flex-shrink-0" style={{width: "400px", height: "100%"}}>
            <div className="d-flex form-group p-3 flex-shrink-0">
                <input className="form-control" placeholder="Search for a question..."></input>
            </div>
            <div className="list-group list-group-flush border-bottom overflow-auto">
                {questionsTest.map((item, index) => {
                    return <Question key={index} title={item.title} body={item.body} author={item.author} />
                })}
            </div>
        </div>
    )
}