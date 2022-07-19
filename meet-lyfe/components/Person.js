export default function Person(props) {
    return (
        <div className="col mb-4">
            <div className="card" style={{height: '150px'}}>
                <img src="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.team}</p>
                </div>
            </div>
        </div>
    )
}