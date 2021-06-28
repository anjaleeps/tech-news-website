import Link from "next/link";

import Header from "../components/header";

const News = () => (
    <div>
        <Header></Header>
        <div className="container">
            <h2>About Us</h2>
            <div className="content">
                <p>We provide the latest news in technology.</p>
            </div>
        </div>
        <style jsx>{` 
            .container {
                position: relative;
                text-align: center;
            }

            h2 {
                font-size: 36px;
                font-weight: normal;
            }

            .content {
                position: absolute;
                width: 70vw;
                top: 15vh; left: 0; right: 0; bottom: 0;
                margin: auto;
            }
        `}</style>
    </div>
);

export default News;