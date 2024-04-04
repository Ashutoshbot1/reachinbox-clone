import React from 'react';
import './Header.scss';
import Mode from '../Mode/Mode';

const Header = () => {
  return (
    <div className='header'>
      <div className="left">
        <p>Onebox</p>
      </div>
      <div className="right">
        <Mode/>
        <select>
            <option value="">My Workspace</option>
        </select>
      </div>
    </div>
  )
}

export default Header
