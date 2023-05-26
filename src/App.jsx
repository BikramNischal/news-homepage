import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
import BottomContent from "./components/BottomContent";

import "./styles/AppStyle.css";

function App() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // window.addEventListener('resize', setScreenWidth(window.innerWidth));
    return (
        <>
            <Navbar screensize = {screenWidth}/>
            <div className="main-container">
                <MainContent />
                <SideContent />
            </div>
            <BottomContent />
        </>
    )
}

export default App
