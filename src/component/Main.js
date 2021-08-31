import React from 'react'
import { Route, Switch, useParams } from 'react-router';
import Home from './Home/Home'
import Browse from './Browse/Browse';
import MobiBrowse from './Browse/MobiBrowse';
import Bookmark from './Bookmark/Bookmark';
import More from './More/More';
function Main() {
    const {id} = useParams()
    return (
        <div>
            <Switch>
                {
                    id==="home"?<Home />:null
                }
                {
                    id==='browse'?<MobiBrowse />:null
                }
                {
                    id==="bookmark"?<Bookmark />:null
                }
                {
                    id==="more"?<More />:null
                }
                
            </Switch>
        </div>
    )
}

export default Main
