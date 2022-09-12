import { useEffect, useState } from "react";
import {checkForColumnOfFour,checkForRowOfFour,checkForColumnOfThree,checkForRowOfThree} from '../../pages/Home'


export default function ScoreBoard({score}) {

    // const IncreaseScore = () => {
    //     const isAColumnOfFour = checkForColumnOfFour(state)
    //     const isARowOfFour = checkForRowOfFour(state)
    //     const isAColumnOfThree = checkForColumnOfThree(state)
    //     const isARowOfThree = checkForRowOfThree(state)
    
    //     if((isAColumnOfFour || isARowOfFour ) === true){
    //         setScore(score+4)
    //     }
    //     else if(( isAColumnOfThree || isARowOfThree) === true){
    //         setScore(score+3)
    //     }
    // }


  return ( 
        <div className="score-board">
            <h1>{score}</h1>
        </div>
     );
}