import "../styles/MainContentStyles.css";


export default function MainContent() {
    return (
        <div className="main-content">
            <img className="main-image" src="../../public/assets/images/image-web-3-desktop.jpg" width="500px" alt="news image" />

            <div className="main-news-details">
                <h1 className="news-header main-header"> The Bright Future of Web 3.0?</h1>
                <div className="news-description">
                    <p>We dive into the next evolution of the web that claims to put the power
                    of the platforms back into the hands of the people. But is it really
                    fulfilling its promise? </p>
                    <button className="btn read-more">READ MORE</button>
                </div>

            </div>
        </div>
    );
}
