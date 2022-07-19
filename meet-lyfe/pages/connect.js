import axios from 'axios';
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import People from "../components/People";

export default function Connect() {
	const [people, setPeople] = useState([]);
	useEffect(() => {
		axios.get('/api/people/').then((res) => {
			setPeople(res.data);
		})
	});

	return (
		<div>
			<Navbar />
			<div className="row">
				<div className="col-md-3 py-4">
					<div className="my-3 p-3 bg-metlife-green">
						<h5>Filter By...</h5>
					</div>
				</div>
				<div className="col-md-8 py-4 p-3">
					<input className="form-control my-3" placeholder="Search by name..." />
						{
							people.length == 0
							? <Loading />
							: <People people={people} />
						}
				</div>
			</div>
		</div>
	)
}