import { useEffect, useState } from 'react';
import "./styles/greetingBlock.css"
import logo from './img/logo.png';
import clock from './img/clock.png';
import earth from './img/earth.png';
import author from './img/author.jpg';
export default function GreetingBlock(props) {
 
  return (
       <div className="greetingBlock_wrapper">
           <div className="greetingBlock_container">
                <div className="greeting">
                    <img src={logo} className="header_img"></img>
                    <img src={author} className="author_img"/>
               </div>
               
                <div>Катерина Левченко</div>
                <div>Встреча</div>
                <div className="greetingBlock_textBlock">
                     <img src={clock} className="header_icons"></img>
                     30 минут
               </div>
                <div className="greetingBlock_textBlock">
                     <img src={earth} className="header_icons"></img>
                     Zoom
               </div>
           </div>
       </div>
  );
}
