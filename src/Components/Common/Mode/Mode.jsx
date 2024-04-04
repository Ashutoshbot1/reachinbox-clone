import React, { useState } from 'react';
import './Mode.scss'
import elips from '../../../assets/elips.png';
import sun from '../../../assets/sun.png';
import moon from '../../../assets/moon.png';

const Mode = () => {
    const [left,setleft]=useState(0);
    const [mode,setMode]=useState('dark');

    function toggleTheme(){
        setleft(mode==='dark'?'0':'24px');
        setMode(mode==='dark'?'light':'dark')
    }
    
  return (
    <div className='mode' onClick={toggleTheme}>
      <div className="wrapper">
        
        <div className="icon">
            <img src={moon} alt="" />
        </div>
        <div className="icon">
            <img src={sun} alt="" />
        </div>
        <div className="floatingBg" style={{left}}>
            <img src={elips} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Mode
