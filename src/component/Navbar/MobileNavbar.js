import React from 'react'
import './MobileNavbar.css'
import {AiFillHome} from 'react-icons/ai'
import {FaVideo} from 'react-icons/fa'
import {BsBookmarkFill,BsGridFill} from 'react-icons/bs'
import { withRouter, useHistory } from 'react-router-dom';

function MobileNavbar({history}) {
    const id = useHistory().location.pathname
    const home=()=>{
        history.push('/home')
    }
    const browse=()=>{
        history.push('/browse')
    }
    const bookmark=()=>{
        history.push('/bookmark')
    }
    const more=()=>{
        history.push('/more')
    }
    return (
        <div className="container">
            <div className="EachNavIcon" onClick={home}>
                <AiFillHome style={{color:`${id==="/home"?'purple':'gray'}`}} size={50} />
                <p>Discover</p>
            </div>
            <div className="EachNavIcon" onClick={browse}>
                <FaVideo style={{color:`${id==='/browse'?'purple':'gray'}`}} size={50} />
                <p>Browse</p>
            </div>
            <div className="EachNavIcon" onClick={bookmark}>
                <BsBookmarkFill style={{color:`${id==='/bookmark'?'purple':'gray'}`}} size={60} />
                <p>Bookmark</p>
            </div>
            <div className="EachNavIcon" onClick={more}>
                <BsGridFill style={{color:`${id==='/more'?'purple':'gray'}`}} size={35} />
                <p>More</p>
            </div>
        </div>
    )
}

export default withRouter(MobileNavbar)
