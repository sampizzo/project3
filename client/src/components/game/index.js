import React, { useState, useEffect } from "react";
import "./style.css";
import syntaxComponent from "../syntax";
import htmlJson from "../../utils/html.json";
import useKeyPress from "../../hooks/useKeyPress";
import GameForm from "../gameForm/gameForm";
import { PromiseProvider } from "mongoose";
import ScoreBoard from "../scoreboard";


//UIFX Audio imports
import UIfx from "uifx";
import coinAudio from "./coin.mp3";
import themeAudio from "./Birabuto-Kingdom.mp3"
import lvlAudio from "./lvl.mp3"
const coin = new UIfx(coinAudio, 
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 50
  });
  const theme = new UIfx(themeAudio, 
    {
      volume: 0.4, // number between 0.0 ~ 1.0
      throttleMs: 50
    });
const lvl = new UIfx(lvlAudio)
theme.play();


function Game(props) {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(
    htmlJson[0].syntax.split("").map(letter => {
      return { char: letter, guessed: false };
    })
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lvl, setLvl] = useState(1);
  const [lives, setLives] = useState(3);


  useKeyPress(key => {
    console.log(key, word[index]);
    // console.log(check)
    if (key === word[index].char) {
      word[index].guessed = true;
      let newIndex = index + 1;
      if (newIndex === word.length) {
        setScore(score + 100);
        coin.play();
        if (
          score % 10 === 0
        ) {
          setLvl(lvl + 1);
        }
        setWordIndex(wordIndex + 1);
      }
      else if (newIndex ==! word.length) {
        setIndex(lives - 1)
        if (lives === -1) {
          //game over
        }
      }
      setIndex(newIndex);
    }
  });

  useEffect(() => {
    let newWord = htmlJson[wordIndex].syntax.split("").map(letter => {
      return { char: letter, guessed: false };
    });
    setWord(newWord);
    setIndex(0);
  }, [wordIndex]);

  useEffect(() => {
    setScore(score);
  }, score);

  return (
    <div className="container">
      <div className="gameDiv">
        <div key={+new Date(wordIndex)} className="word">
          {/* {this.state.html.map(html=> ( */}
          <syntaxComponent>
            {word.map(letter => (
              <span className={letter.guessed ? "guessed" : "unguessed"}>
                {letter.char}
              </span>
            ))}
          </syntaxComponent>
          {/* ))} */}
        </div>
      </div>
      {/* <GameForm /> */}
      <div>
        <div className="scoreBoard">
          <h2>
            Coins: {score} Level: {lvl} Lives: {lives}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Game;
