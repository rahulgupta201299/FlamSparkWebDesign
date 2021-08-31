import React,{useState,useEffect} from 'react'
import MobileHome from './MobileHome'
import WebHome from './WebHome';

function Home() {
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
        <div>
            {
                width<=900?<MobileHome />:<WebHome />
            }
        </div>
    )
}

export default Home
