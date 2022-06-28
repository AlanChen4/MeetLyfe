import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {

    const router = useRouter();

    return (
        <nav className="navbar shadow py-0">
            <div className="container-fluid row">
                <div className="col-md-1 d-flex justify-content-center">
                    <a className="navbar-brand m-0" href="#">
                        <img src="./images/acelogo.png" height={65} />
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="/ask" className="link-dark">
                        <h5 className="text-center">Ask</h5>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="/connect" className="link-dark">
                        <h5 className="text-center">Connect</h5>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="/explore" className="link-dark">
                        <h5 className="text-center">Explore</h5>
                    </a>
                </div>
                <div className="col-md-1 d-flex justify-content-center">
                    <a href="/profile">
                        <img src="./images/mikepfp.png" height="50" alt="PFP"></img>
                    </a>
                </div>
            </div>
        </nav>
    )
}