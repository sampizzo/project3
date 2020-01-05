import React, { useState, useEffect } from "react";
import "./style.css";
import syntaxComponent from "../syntax";
import htmlJson from "../../utils/html.json"
import useKeyPress from '../../hooks/useKeyPress';

function Game() {
  const[html, setHtml] = useState(htmlJson)
  const[index, setIndex] = useState(0)
  const[current, setCurrent] = useState(html[0])
  const[check, setCheck] = useState([])


  useKeyPress(key => {
    
    console.log(key, current.syntax)
    // console.log(check)
    if (key === current.syntax) {
      setCheck([...check, key])
      // let newIndex =  index + 1
      // setIndex(newIndex);
      // current.syntax = newIndex
    //   setCurrent(htmlJson[index]);
      // setTimeout(console.log("check: " + check),1000)
  
    }
});
useEffect(()=> {console.log(check)},[check]) 



  return (
    <div className="gameDiv container">
        <div key={+new Date()} className="word">
        {/* {this.state.html.map(html=> ( */}
          <syntaxComponent>{current.syntax}</syntaxComponent>
          {/* ))} */}
        </div>
    </div>
  );

  }

export default Game;
