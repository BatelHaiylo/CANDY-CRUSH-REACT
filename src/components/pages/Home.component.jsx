import { useContext, useEffect, useState } from "react"
import './Home.css'
import {width,checkForColumnOfFour,checkForRowOfFour,checkForColumnOfThree,checkForRowOfThree,moveIntoSquareBelow,createBoard} from './Home'
import ScoreBoard from "../featurs/score board/ScoreBoard.component"
import {ScoreContext} from '../context/ScoreProvider.component'
export default function Home() {
  const[ currentColorArrangement, setCurrentColorArrangement] = useState([])
  const[ squareBeingDragged, setsquareBeingDragged] = useState(null)
  const[ squareBeingReplaced, setsquareBeingReplaced] = useState(null)
  const{score,setScore}= useContext(ScoreContext)

  useEffect(()=>{
    const timerId = setInterval(()=>{
        checkForColumnOfFour(currentColorArrangement)
        checkForRowOfFour(currentColorArrangement)
        checkForColumnOfThree(currentColorArrangement)
        checkForRowOfThree(currentColorArrangement)
        moveIntoSquareBelow(currentColorArrangement)

        setCurrentColorArrangement([...currentColorArrangement])
    },100)
    return ()=>clearInterval(timerId)
  },[checkForColumnOfFour,checkForRowOfFour,checkForColumnOfThree,checkForRowOfThree,moveIntoSquareBelow,currentColorArrangement])

  useEffect(()=>{setCurrentColorArrangement(createBoard())},[])

  const dragStart = (e) => {
    setsquareBeingDragged(e.target)
}
const dragDrop = (e) => {
    setsquareBeingReplaced(e.target)
}
const dragEnd = () => {
    const squareBeingDraggedId =  parseInt(squareBeingDragged.getAttribute('data-id'))
    const squareBeingReplacedId =  parseInt(squareBeingReplaced.getAttribute('data-id'))

    currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
    currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

    console.log("squareBeingDraggedId", squareBeingDraggedId)
    console.log("squareBeingReplacedId", squareBeingReplacedId)

    const validMoves = [
        squareBeingDraggedId - 1,
        squareBeingDraggedId - width,
        squareBeingDraggedId + 1,
        squareBeingDraggedId + width
    ]

    const validMove = validMoves.includes(squareBeingReplacedId)

    const isAColumnOfFour = checkForColumnOfFour(currentColorArrangement)
    const isARowOfFour = checkForRowOfFour(currentColorArrangement)
    const isAColumnOfThree = checkForColumnOfThree(currentColorArrangement)
    const isARowOfThree = checkForRowOfThree(currentColorArrangement)

    if(squareBeingReplacedId && validMove &&
        ( isAColumnOfFour || isAColumnOfThree || isARowOfFour || isARowOfThree)){
            setsquareBeingDragged(null)
            setsquareBeingReplaced(null)
        } else {
            currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
            currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
            setCurrentColorArrangement([...currentColorArrangement])
        }
}

  return (
    <div className="home">
        {/* <ScoreBoard state={currentColorArrangement}/> */}
    <div className="game">
    {currentColorArrangement.map((candyColor,index) => (
      <img 
      key={index}
      src={candyColor}
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