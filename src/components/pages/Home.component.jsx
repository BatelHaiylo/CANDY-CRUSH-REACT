import { useEffect, useState } from "react"
import './Home.css'
import {checkForColumnOfFour,checkForRowOfFour,checkForColumnOfThree,checkForRowOfThree,moveIntoSquareBelow,dragStart,dragDrop,dragEnd,createBoard} from './Home'

export default function Home() {
  const[ currentColorArrangement, setCurrentColorArrangement] = useState([])
  const[ squareBeingDragged, setsquareBeingDragged] = useState(null)

  useEffect(()=>{
    const timerId = setInterval(()=>{
        checkForColumnOfFour(currentColorArrangement)
        checkForRowOfFour(currentColorArrangement)
        checkForColumnOfThree(currentColorArrangement)
        checkForRowOfThree(currentColorArrangement)
        moveIntoSquareBelow(currentColorArrangement)

        setCurrentColorArrangement([...currentColorArrangement])
    },1000)
    return ()=>clearInterval(timerId)
  },[checkForColumnOfFour,checkForRowOfFour,checkForColumnOfThree,checkForRowOfThree,moveIntoSquareBelow,currentColorArrangement])

  useEffect(()=>{setCurrentColorArrangement(createBoard())},[])

  return (
    <div className="home">
    <div className="game">
    {currentColorArrangement.map((candyColor,index) => (
      <img 
      key={index}
      style={{backgroundColor: candyColor}}
      alt={candyColor}
      data-id={index}
      draggable={true}
      onDragStart={dragStart}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
      onDragLeave={(e) => e.preventDefault()}
      onDrop={dragDrop}
      onDragEnd={dragEnd}
       />
    ))}
    </div>
    </div>
  )
}