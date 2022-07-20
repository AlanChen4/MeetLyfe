//people are indexed by their ACE ID - could soon be employee ID. 
export default function Event(props) {

    const dateStr = function(datetime) { 
        let s = ` ${new Date(datetime).toLocaleDateString()} | ${new Date(datetime).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`
         return s;
        }

    return (
        <div className="col mb-4">
            <div className="card" style={{height: '250px'}}>
                <img src={props.image ? props.image : ''/*default metlife image*/ } className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title overflow">{props.name}</h5>
                    <p className="card-text">{dateStr(props.datetime)}</p>
                    <p className="card-text">{props.loc} | {props.virtual ? 'virtual' : 'in-person'}</p>
                    <p className="card-text overflow">{props.desc}</p>
                    <button className='btn btn-primary eventbutton'>{props.virtual ? 'Meeting Link' : 'RSVP'}</button>
                </div>
            </div>
        </div>
    )
}