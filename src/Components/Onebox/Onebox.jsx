import React from 'react'
import './Onebox.scss'
import Navbar from '../Common/Navbar/Navbar'
import Header from '../Common/Header/Header'
import MainComp from './MainComp.jsx/MainComp'

const Onebox = () => {
  return (
    <div className='onebox'>
      <div className="navbarContainer cont">
        <Navbar/>
      </div>
      <div className="headerContainer cont">
        <Header/>
      </div>
      <div className="mainContainer cont">
        <MainComp/>
      </div>
    </div>
  )
}

export default Onebox
