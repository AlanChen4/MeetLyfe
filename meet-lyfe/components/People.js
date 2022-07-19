import Person from './Person';

export default function People(props) {
    return (
        <div className="row row-cols-1 row-cols-md-3">
            {props.people.map((person, index) => {
                return <div key={index}>
                    <Person name={person.name} team={person.team} />
                </div>
            })}
        </div>
    )
}