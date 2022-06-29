export default function Question(props) {
    return (
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
                <strong className="mb-1">{props.title}</strong>
                <small>{props.author}</small>
            </div>
            <div className="col-10 mb-1 small">{props.body}</div>
        </a>
    )
}