import { useEffect, useState } from "react";
import {checkForColumnOfFour,checkForRowOfFour,checkForColumnOfThree,checkForRowOfThree} from '../../pages/Home'


export default function ScoreBoard({state}) {
    // const [score,setScore] = useState(0)
    useEffect(()=>{IncreaseScore()},[score])

    const IncreaseScore = () => {
        const isAColumnOfFour = checkForColumnOfFour(state)
        const isARowOfFour = checkForRowOfFour(state)
        const isAColumnOfThree = checkForColumnOfThree(state)
        const isARowOfThree = checkForRowOfThree(state)
    
        if((isAColumnOfFour || isARowOfFour ) === true){
            setScore((score)=>score+4)
        }
        if(( isAColumnOfThree || isARowOfThree) === true){
            setScore((score)=>score+3)
        }
    }


  return ( 
        <div className="score-board">
            <h1>{score}</h1>
        </div>
     );
}