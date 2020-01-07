import React, { useState, useEffect } from "react";
import "./style.css";
import syntaxComponent from "../syntax";
import javascriptJson from "../../utils/javascript.json";
import useKeyPress from "../../hooks/useKeyPress";
import { PromiseProvider } from "mongoose";
import ScoreBoard from "../scoreboard";
import { Redirect } from "react-router-dom";

                        //Gifs and images
///////////////////////////////////////////////////////////////////
// import flagpole from "./flagpole.gif";
// import coinGif from "./coin.gif";
// import dieGif from "./dies.gif";
// import extraLife from "./1up.png";

                          //UIFX Audio imports
///////////////////////////////////////////////////////////////////

import UIfx from "uifx";
import coinAudio from "./coin.mp3";
import themeAudio from "./Birabuto-Kingdom.mp3";
import lvlAudio from "./lvl.mp3";
import lifeAudio from "./lostLife.wav";

const coin = new UIfx(coinAudio, {
  volume: 0.6, // number between 0.0 ~ 1.0
  throttleMs: 50
});
const theme = new UIfx(themeAudio, {
  volume: 0.1, // number between 0.0 ~ 1.0
  throttleMs: 100
});
const life = new UIfx(lifeAudio, {
  volume: 1.0, // number between 0.0 ~ 1.0
  throttleMs: 40
});
const lvl = new UIfx(lvlAudio);
theme.play();



///////////////////////////////////////////////////////////////////

                      //GAME FUNCTION BEGIN

///////////////////////////////////////////////////////////////////

function Game(props) {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(
    javascriptJson[0].syntax.split("").map(letter => {
      return { char: letter, guessed: false };
    })
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lvl, setLvl] = useState(1);
  const [lives, setLives] = useState(3);
  const [mistakes, setMistakes] = useState(0);
  const [show, setShow] = useState(false);
  let [counter, setCounter] = useState(10);
  const [coinsCollected, setCoinsCollected] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [errCount, setErrCount] = useState(0);




            //TIMER FUNCTION, IF COUNTER = 0, -1 LIVES
///////////////////////////////////////////////////////////////////

  useEffect(() => {
    let timer = setInterval(() => {
      setCounter(counter => counter - 1);
    }, 1000);
  }, []);
  if (counter === 0) {
    setWordIndex(wordIndex + 1);
    setLives(lives - 1);
    life.play();
    setCounter(10);
    if (lives === 1) {
      console.log("lives = 0")
      setShow(true);
      console.log(show)
    }
  }


                        //KEY PRESS HOOK
///////////////////////////////////////////////////////////////////
useKeyPress(key => {
    if (key === word[index].char) {
      word[index].guessed = true;
      let newIndex = index + 1;
      setScore(score + 10);
      if (newIndex === word.length) {
        setCoinsCollected(coinsCollected + 1)
        setWordCount(wordCount + 1)
        coin.play();
        setCounter(10);
        if (score % 100 === 0) {
          setLvl(lvl + 1);
        }
        setWordIndex(wordIndex + 1);
      } 
      setIndex(newIndex);
    }
    if (key !== word[index].char) {
      setMistakes(mistakes + 1);
      setErrCount(errCount + 1)
      if (mistakes === 3) {
        setLives(lives - 1);
        setMistakes(0);
        life.play();
        if (lives === 1) {
          console.log("lives = 0")
          setShow(true);
          console.log(show)
        }
      }
    }
  });

                    //CHANGE CSS OF LETTER TYPED
///////////////////////////////////////////////////////////////////
  useEffect(() => {
    let newWord = javascriptJson[wordIndex].syntax.split("").map(letter => {
      return { char: letter, guessed: false };
    });
    setWord(newWord);
    setIndex(0);
  }, [wordIndex]);




                          //RETURN OF THE JEDI
///////////////////////////////////////////////////////////////////
  return (
    <div className="container">
      {show === true && <ScoreBoard lvl={lvl} score={score} coinsCollected={coinsCollected} wordCount={wordCount} errCount={errCount} />}
      <div id="Game" style={ show ? { display: "none" }  : { display: "block" } }>
        <div className="gameDiv">
          {/* <div id="lvl" className="gif">
            <img src={flagpole}></img>
          </div>
          <div id="coin" className="gif">
            <img src={coinGif}></img>
          </div>
          <div id="die" className="gif">
            <img src={dieGif}></img>
          </div> */}
          <div key={+new Date(wordIndex)} className="word">
            <syntaxComponent>
              {word.map(letter => (
                <span className={letter.guessed ? "guessed" : "unguessed"}>
                  {letter.char}
                </span>
              ))}
            </syntaxComponent>
          </div>
        </div>
        <div>
          <div className="scoreBoard">
            <h2>
              Score: {score} Coins: {coinsCollected} Level: {lvl} Lives: {lives} Mistakes: {mistakes}{" "} 
              Time: {counter}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
