import React, { useState } from 'react'
import './MenuPerson.css'
import Visibility from '@material-ui/icons/Visibility';
import Settings from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TimelineIcon from '@material-ui/icons/Timeline';
import Crop54Icon from '@material-ui/icons/Crop54';

const MenuPerson = () => {

    const [nb, setNb] = useState(1)
    const ui = {
        background: '#EFEAFF',
        borderRadius: '10px',
        width: '80%'
    }
    return (
        <div className="menu-person">
            <div className="header">
                <img className="img-profile" src="https://adelstiti.github.io/images/adel1.jpg" alt="Profile"/>
                <div className="content-person">
                <p className="name-person">Adel Stiti</p>
                <span  className="job-person" >Web Developer</span>
                </div>
            </div>
            <hr/>
            <ul className="my-menu">
                <li  onMouseEnter={() => setNb(1)}  style={nb  === 1 ?ui : {}}>         
                    <span>Profile and Visibility</span>
                    <Visibility style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/>

                </li>
                <li   onMouseEnter={() => setNb(2)} style={nb  === 2 ? ui : {}}>         
                    <span>Activity</span>
                    <TimelineIcon style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/>

                </li>
                <li onMouseEnter={() => setNb(3)}  style={nb  === 3 ? ui : {}}>         
                    <span>Cards</span>
                    <Crop54Icon style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/>

                </li>
                <li onMouseEnter={() => setNb(4)}  style={nb  === 4 ? ui : {}}>         
                    <span>Settings</span>
                    <Settings style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/>

                </li>
                <li  onMouseEnter={() => setNb(5)} style={nb  === 5 ? ui : {}}>         
                    <span>Log out</span>
                    <ExitToAppIcon style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/>

                </li>
            </ul>
        </div>
    )
}

export default MenuPerson
