import Event from './Event';

export default function Calendar(props) {
    return (
        <div className="row row-cols-1 row-cols-md-3">
            {props.event.map((event, index) => {
                return <div key={index}>
                    <Event name={event.name} 
                    virtual={event.virtual} 
                    loc={event.loc} 
                    desc={event.description} 
                    datetime={event.datetime}
                    host={event.host}
                    />
                </div>
            })}
        </div>
    )
}