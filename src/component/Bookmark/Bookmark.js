import React,{useState,useEffect} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { withRouter } from 'react-router';

function Bookmark({history}) {
    const [width,setWidth]=useState(0)
    const updateWindowDimensions = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth)
    };
    
    useEffect(()=>{
        setWidth(window.innerWidth)
        window.addEventListener('resize', updateWindowDimensions);
    },[])
    const back=()=>{
        history.push('/home')
    }
    return (
        <div>
            {
                width<=900?(
                    <div>
                    <div className="BrowseHead" style={{marginLeft:'20px'}}>
                        <div className="BackIcon" onClick={back}><BiArrowBack size={70}/></div>
                        <h1 style={{color:'white',fontSize:'45px'}}>Bookmark</h1>
                    </div>
                    <div style={{position:'absolute',marginTop:'30%',marginLeft:'35%'}}>
                        <p style={{color:'gray'}}>No Bookmark added</p>
                    </div>
                    </div>
                ):<div style={{position:'absolute',marginTop:'30%',marginLeft:'44%'}}>
                    <p style={{color:'gray'}}>No Bookmark added</p>
                </div>
            }
        </div>
    )
}

export default withRouter(Bookmark)
