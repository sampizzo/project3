import React, { useState, useEffect } from "react";
import "./style.css";
import syntaxComponent from "../syntax";
import htmlJson from "../../utils/html.json"
import useKeyPress from '../../hooks/useKeyPress';
import GameForm from '../gameForm/gameForm';
import { PromiseProvider } from "mongoose";


function Game() {
  const[index, setIndex] = useState(0)
  const[word, setWord] = useState(htmlJson[0].syntax.split("").map(letter=> {return({char: letter, guessed: false})}))
  const[wordIndex, setWordIndex] = useState(0)
  
 


  useKeyPress(key => {
    console.log(key, word[index])
    // console.log(check)
    if (key === word[index].char) {
      word[index].guessed = true;
      let newIndex =  index + 1
      if (newIndex === word.length) {
        setWordIndex(wordIndex + 1)

      }
      setIndex(newIndex);
      // current.syntax = newIndex
      // setTimeout(console.log("check: " + check),1000)
  
    }
  
});

useEffect(()=> {
  let newWord = htmlJson[wordIndex].syntax.split("").map(letter=> {return({char: letter, guessed: false})})
  setWord(newWord)
  setIndex(0)

},[wordIndex]) 



  return (
    <div>
    <div className="gameDiv container">
        <div key={+new Date()} className="word">
        {/* {this.state.html.map(html=> ( */}
          <syntaxComponent>{word.map(letter => <span className= {letter.guessed? "guessed" : "unguessed"}>{letter.char}</span>)}</syntaxComponent>
          {/* ))} */}
        </div>
    </div>
      <GameForm />
    </div>
  );

  }

export default Game;
