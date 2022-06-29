import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
    return (
        <div style={{height: "90vh"}}>
            <div className="h-100">
                <Navbar />
                <div className="d-flex h-100">
                    <Sidebar />
                    <h1>Test content</h1>
                </div>
            </div>
        </div>
    )
}
