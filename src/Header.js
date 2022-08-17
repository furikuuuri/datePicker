import { useEffect, useState } from 'react';
import logo from './img/logo.png';
import "./styles/header.css"
export default function Header(props) {
  return (
    <div className="header_wrapper">
      <div className="header_container">
        <img src={logo} className="header_img"></img>
        {/* <div className="header_title">Бронируй меня полностью</div> */}
      </div>
    </div>
    
  );
}
