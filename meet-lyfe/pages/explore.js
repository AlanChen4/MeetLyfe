import axios from 'axios';
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";

export default function Explore() {

    const [event, setEvent] = useState([]);
	useEffect(() => {
		axios.get('/api/event/').then((res) => {
			setEvent(res.data);
		})
	});

    return (
        <div>
        <Navbar/>
            <div className="row p-4">
                <h2 className="text-center">Michael's Up Next</h2>
            </div>
            <div className="row p-4">
                <input className="form-control my-3" placeholder="Search by events..." />
                <h2 className="text-center">Happening @ MetLife</h2>
            </div>
            <div className="row p-4">
                <h4>Upcoming Events For You</h4>
                {
							event.length == 0
							? <Loading />
							: <Calendar event={event} />
				}
            </div>
        </div>
    )
}