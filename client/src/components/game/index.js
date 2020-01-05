import React, { useState } from "react";
import "./style.css";
import syntaxComponent from "../Syntax";
import htmlJson from "../../utils/html.json"
import useKeyPress from '../../hooks/useKeyPress';
import GameForm from '../gameForm/gameForm';
import { PromiseProvider } from "mongoose";


function Game() {
  const[html, setHtml] = useState(htmlJson)
  const[index, setIndex] = useState(0)
  const[current, setCurrent] = useState(html[0])
  const[myClass, setMyClass] = useState("word")

function resetAnimation(){
  setMyClass("")
  setMyClass("word")
}
const check = []

  useKeyPress(key => {

    console.log(key, current.syntax)
    
    if (key === current.syntax) {
      current.syntax = ""
      current.syntax = newIndex
      let newIndex = index + 1
      setIndex(newIndex);
      setCurrent(htmlJson[index]);
      resetAnimation();
    }
});
console.log("check: " + check.length)

  return (
    <div>
    <div className="gameDiv container">
        <div className="word">
        {/* {this.state.html.map(html=> ( */}
          <syntaxComponent>{current.syntax}</syntaxComponent>
          {/* ))} */}
        </div>
    </div>
      <GameForm />
    </div>
  );

  }

export default Game;
