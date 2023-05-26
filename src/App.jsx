import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
import BottomContent from "./components/BottomContent";

import "./styles/AppStyle.css";

function App() {
    function getCurretnDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    const [screenSize, setScreenSize] = useState(getCurretnDimension());

    useEffect(()=>{
        const updateDimension = ()=>{
            setScreenSize(getCurretnDimension());
        }
        window.addEventListener('resize', updateDimension);
        return(() =>{
            window.removeEventListener('resize',updateDimension);
        });
    }, [screenSize]);

    return (
        <>
            <Navbar screensize = {screenSize.width}/>
            <div className="main-container">
                <MainContent />
                <SideContent />
            </div>
            <BottomContent />
        </>
    )
}

export default App
