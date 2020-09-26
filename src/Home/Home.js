import React, { useState } from 'react';
import '../Home/Home.css'

import MenuPerson from '../components/MenuPerson/MenuPerson.js';
import Person from '../components/Person/Person';
import Event from '../components/Event/Event';
import PinMenu from '../components/PinMenu/PinMenu';
import Avatar from '../components/Avatar/Avatar';


function Home() {

  const [state, setstate] = useState(0)
  return (
    <>
      <h3 className="title-ui">UI</h3>
      <div className="App"> 
        <ul>
          <li  onClick={() => setstate(0)}  className={state === 0 ? 'hover-menu' : ''} > Pin Menu </li>
          <li  onClick={() => setstate(1)} className={state === 1 ? 'hover-menu' : ''}  > Person </li>
          <li onClick={() => setstate(2)} className={state === 2 ? 'hover-menu' : ''}  > Menu Person </li>
          <li  onClick={() => setstate(3)} className={state === 3 ? 'hover-menu' : ''}  > My Event </li>
          <li  onClick={() => setstate(4)} className={state === 4 ? 'hover-menu' : ''}  > Avatars </li>
        </ul>
      </div>
      <div className="my-ui">
        {state === 0 && <PinMenu />}
        {state === 1 && <Person />}
        {state === 2 && <MenuPerson />}
        {state === 3 && <Event />}
        {state === 4 && <Avatar />}
      </div>
    </>
  );
}

export default Home;
