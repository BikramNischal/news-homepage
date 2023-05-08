import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
import BottomContent from "./components/BottomContent";

import "./styles/AppStyle.css";

function App() {
    return (
        <>
            <Navbar />
            <div className="main-container">
                <MainContent />
                <SideContent />
            </div>
            <BottomContent />
        </>
    )
}

export default App
