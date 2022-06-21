export default function Ask() {
    return (
        <div id = "fullbody">
            <div id="header" class="light">
                <div id="aceimg" class="light">
                    <a href="./ask.html"><img src="./images/acelogo.png" height="75" alt="Logo"></img></a>
                </div>
                <div id="ask" class="tab selected light">
                    <a href="ask.html">Ask</a>
                </div>
                <div id="connect" class="tab light">
                    <a href="ask.html">Connect</a>
                </div>
                <div id="explore" class="tab light">
                    <a href="ask.html">Explore</a>
                </div>
                <div id="pfp" class="light">
                    <img src="./images/mikepfp.png" height="50" alt="PFP"></img>
                </div>
            </div>
            <div id="qbar">
                <div>
                    <h2>Questions</h2>
                    <div id = "qlist">
                    </div>
                </div>
            </div>
            <div id="mainask" class="main light">
                <div id="askcontainer">
                    
                </div>
            </div>
        </div>
    )
}