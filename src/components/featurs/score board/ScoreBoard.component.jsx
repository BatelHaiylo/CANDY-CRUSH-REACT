import { useEffect, useState } from "react";
import {checkForColumnOfFour,checkForRowOfFour,checkForColumnOfThree,checkForRowOfThree} from '../../pages/Home'


export default function ScoreBoard({score}) {

  return ( 
        <div className="score-board">
            <h1>{score}</h1>
        </div>
     );
}