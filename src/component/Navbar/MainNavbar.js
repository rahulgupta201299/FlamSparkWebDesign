import React,{useState,useEffect} from 'react'
import MobileNavbar from './MobileNavbar'
import WebNavbar from './WebNavbar'

function MainNavbar() {
    const [width,setWidth]=useState(0)
    const updateWindowDimensions = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth)
    };
    
    useEffect(()=>{
        setWidth(window.innerWidth)
        window.addEventListener('resize', updateWindowDimensions);
    },[])
    return (
        <div style={{zIndex:99}}>
            {
                width<=900?<MobileNavbar />:<WebNavbar />
            }
        </div>
    )
}

export default MainNavbar
