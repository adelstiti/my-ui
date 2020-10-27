import React, { useState } from 'react';
import '../Home/Home.css'

import MenuPerson from '../components/MenuPerson/MenuPerson.js';
import Person from '../components/Person/Person';
import Event from '../components/Event/Event';
import PinMenu from '../components/PinMenu/PinMenu';
import Avatar from '../components/Avatar/Avatar';
import Submit from '../components/Submit/Submit';

import  PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/icons/List';
import  EventIcon from '@material-ui/icons/Event';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextFormat from '@material-ui/icons/TextFormat';
import ClearAll from '@material-ui/icons/ClearAll';

function Home() {

  const [state, setstate] = useState(0)
  return (
    <>
      <h3 className="title-ui">UI</h3>
      <div className="App"> 
        <ul>
          <li  onClick={() => setstate(0)}  className={state === 0 ? 'hover-menu' : ''} > 
            Pin Menu
            <ClearAll style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/> 
          </li>
          <li  onClick={() => setstate(1)} className={state === 1 ? 'hover-menu' : ''} >
            <PersonIcon style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/> 
            Person 
            </li>
          <li onClick={() => setstate(2)} className={state === 2 ? 'hover-menu' : ''}  > 
            <List style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/> 
            Menu Person 
          </li>
          <li  onClick={() => setstate(3)} className={state === 3 ? 'hover-menu' : ''}  > 
            <EventIcon style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/> 
            My Event 
          </li>
          <li  onClick={() => setstate(4)} className={state === 4 ? 'hover-menu' : ''}  > 
            <AccountCircle style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/> 
            Avatars 
          </li>
          <li  onClick={() => setstate(5)} className={state === 4 ? 'hover-menu' : ''}  > 
            <TextFormat style={{float:'left',marginRight : '3%'}} htmlColor="#2C3E50"/> 
            Submit Form 
          </li>
        </ul>
      </div>
      <div className="my-ui">
        {state === 0 && <PinMenu />}
        {state === 1 && <Person />}
        {state === 2 && <MenuPerson />}
        {state === 3 && <Event />}
        {state === 4 && <Avatar />}
        {state === 5 && <Submit />}
      </div>
    </>
  );
}

export default Home;
