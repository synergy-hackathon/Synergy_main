import React from "react";

function Index() {
    return <div>
        <h4 style={{
            textAlign: "center",
            fontFamily: 'Raleway, Open Sans, Arial, sans-serif',
            fontSize: "2.1rem"
        }}>Meeting Young Hackers is an <span className="highlight">incredible</span> feeling.</h4>
        <br/>
        <p className="announcement">
            We are thrilled to announce an incredible hackathon taking place in Mumbai, scheduled for May or June. This event promises to bring together innovative minds and talented individuals for a day of creativity, collaboration, and competition. Stay tuned for more details, including the exact date, which will be announced soon. Don’t miss out on this fantastic opportunity to showcase your skills and connect with fellow innovators!
        </p>
        <center className="comingSoon">
            <img src="/coming%20soon.png" alt="Coming Soon!" />
        </center>
    </div>;
}

export default Index;
