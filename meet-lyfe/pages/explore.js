import Navbar from "../components/Navbar"

export default function Explore() {
    return (
        <div>
        <Navbar/>
            <div className="row p-4">
                <h2 className="text-center">Michael's Up Next</h2>
            </div>
            <div className="row p-4">
                <h2 className="text-center">Happening @ MetLife</h2>
            </div>
            <div className="row p-4">
                <h4>Today</h4>
            </div>
        </div>
    )
}