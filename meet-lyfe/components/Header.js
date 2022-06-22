export default function Header()
{
    return (
        <div id="header" className="light">
            <div id="aceimg" className="light">
                <a href="ask"><img src="./images/acelogo.png" height="75" alt="Logo"></img></a>
            </div>
            <div id="ask" className="tab selected light">
                <a href="ask">Ask</a>
            </div>
            <div id="connect" className="tab light">
                <a href="connect">Connect</a>
            </div>
            <div id="explore" className="tab light">
                <a href="explore">Explore</a>
            </div>
            <div id="pfp" className="light">
                <a href="profile"><img src="./images/mikepfp.png" height="50" alt="PFP"></img></a>
            </div>
        </div>
    );
}