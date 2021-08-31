import React,{useEffect, useState} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { useParams, withRouter } from 'react-router'
import './MobiBrowse.css'
import {setNavChange} from '../Redux/NavChange/NavChange-action'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import {RiSendPlaneFill} from 'react-icons/ri'

function MobiBrowse({history}) {
    const {id} = useParams()
    const [click,setClick]=useState(false)
    const back=()=>{
        history.push('/home')
    }

    let images=[{
        id: 1,
        image: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2thdGVib2FyZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        title: 'Your first skateboard'
    },{
        id: 2,
        image: 'https://images.unsplash.com/photo-1559684548-5b77a00371bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        title: 'Your first skateboard'
    },{
        if:3,
        image: 'https://media.wired.com/photos/5954932fbe605811a2fdd6e9/master/pass/s5pOG7texzsXk-2VmYcDV-wSlTaReaaI76QjDkBci7QqWHH5gXVTOy3yhWv_3vbb2EL11iVzQOfsDpVDIR-Iko.jpeg',
        title: 'Your first skateboard'
    }]

    return (
        <div className="MobiBrowseContainer">
            <div className="BrowseHead">
                <div className="BackIcon" onClick={back}><BiArrowBack size={70}/></div>
                <h1 style={{color:'white',fontSize:'45px'}}>Browse</h1>
            </div>
            <div className="BrowseAllImages">
                {
                    images.map((card,i)=>(
                        <div key={i} className="BrowseEachImages">
                            <img onDoubleClick={()=>setClick(true)} className="BrowseImage" src={card.image} alt="" />
                            <div className="BrowseTitle">
                                <h3 style={{color:'white',letterSpacing:'0.4mm',flexGrow:4}}>{card.title}</h3>
                                <div style={{display:'flex',flexDirection:'row',marginTop:'auto',marginBottom:'auto',flexGrow:1,gap:'10%'}}>
                                    {
                                        click?<div onClick={()=>setClick(false)}><FcLike style={{cursor:'pointer'}} size={30} /></div>:<div onClick={()=>setClick(true)}><FcLikePlaceholder style={{cursor:'pointer'}} size={30} /></div>
                                    }
                                    <RiSendPlaneFill style={{cursor:'pointer'}} size={30} color={'purple'} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div style={{margin: '100px'}}></div>
        </div>
    )
}

export default withRouter(MobiBrowse)
