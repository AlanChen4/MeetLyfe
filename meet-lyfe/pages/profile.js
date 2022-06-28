import Navbar from "../components/Navbar";

export default function Profile() {
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-md-4 bg-light">
                    <div className="d-flex flex-row justify-content-center">
                        <img className="pt-5" src="./images/mikepfp.png" height={300} />
                    </div>
                    <div className="row mt-5 mb-3">
                        <h1 className="text-center"><strong>Michael Phillips</strong></h1>
                        <h4 className="text-center">Recruiting Manager</h4>
                        <h4 className="text-center">Global Talent Acquisition</h4>
                    </div>
                </div>
                <div className="col-md-8 bg-light py-5">
                    <div className="card mx-5 mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Located in...</h5>
                        </div>
                    </div>
                    <div className="card mx-5 mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Some of your skills include...</h5>
                        </div>
                    </div>
                    <div className="card mx-5 mb-3">
                        <div className="card-body">
                            <h5 className="card-title">In your free time you...</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}