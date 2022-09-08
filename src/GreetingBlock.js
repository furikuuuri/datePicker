import { useEffect, useState } from 'react';
import "./styles/greetingBlock.css"

export default function GreetingBlock(props) {
 
  return (
       <div className="greetingBlock_wrapper">
           <div className="greetingBlock_container">
                <div>Левченко Катерина</div>
                <div>Online-встреча</div>
                <div>Давайте начнем!!!</div>
           </div>
       </div>
  );
}
