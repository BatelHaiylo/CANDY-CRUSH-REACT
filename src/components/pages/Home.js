// import {blank,blueCandy,greenCandy,orangeCandy,purpleCandy,redCandy,yellowCandy} from '../featurs/images'
import blank from '/images/blank.png'
import blueCandy from '/images/Bluecandy.png'
import greenCandy from '/images/Greencandy.png'
import orangeCandy from '/images/Orangecandy.png'
import purpleCandy from '/images/Purplecandy.png'
import redCandy from '/images/Redcandy.png'
import yellowCandy from '/images/YellowCandy.png'

const width = 8
const candyColors = [
  blueCandy,
  greenCandy,
  orangeCandy,
  purpleCandy,
  redCandy,
  yellowCandy
]

const checkForColumnOfFour = (colorArray) => {
    for(let i=0; i<39; i++){
        const columnOfFour = [i,i+width,i+width*2,i+width*3]
        const decidedColor =  colorArray[i]

        if( columnOfFour.every( square => colorArray[square] === decidedColor)){
            // setScore((score)=>score+4)
            columnOfFour.forEach(square => colorArray[square] = blank)
        }
    }
}
const checkForRowOfFour = (colorArray) => {
    for(let i=0; i<=64; i++){
        const rowOfFour = [i,i+1,i+2,i+3]
        const decidedColor =  colorArray[i]
        const notValid = [5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55,62,63,64]

        if(notValid.includes(i)) continue

        if( rowOfFour.every( square => colorArray[square] === decidedColor)){
            // setScore((score)=>score+4)
            rowOfFour.forEach(square => colorArray[square] = blank)
            console.log(true)
            return true
            
        }
    }
}
const checkForColumnOfThree = (colorArray) => {
    for(let i=0; i<=47; i++){
        const columnOfThree = [i,i+width,i+width*2]
        const decidedColor =  colorArray[i]

        if( columnOfThree.every( square => colorArray[square] === decidedColor)){
            // setScore((score)=>score+3)
            columnOfThree.forEach(square => colorArray[square] = blank)
            return true
        }
    }
}
const checkForRowOfThree = (colorArray) => {
    for(let i=0; i<64; i++){
        const rowOfThree = [i,i+1,i+2]
        const decidedColor =  colorArray[i]
        const notValid = [6,7,14,15,22,23,30,31,38,39,46,47,54,55,63,64]

        if(notValid.includes(i)) continue

        if( rowOfThree.every( square => colorArray[square] === decidedColor)){
            // setScore((score)=>score+3)
            rowOfThree.forEach(square => colorArray[square] = blank)
            return true
        }
    }
}

const moveIntoSquareBelow = (colorArray) => {
    for(let i=0; i<63-width; i++){
        const firstRow = [0,1,2,3,4,5,6,7]
        const isFirstRow = firstRow.includes(i)

        if(isFirstRow && colorArray[i] === blank){
            let rndNum = Math.floor(Math.random()*candyColors.length)
            colorArray[i] = candyColors[rndNum]
        }

        if(colorArray[i + width] === blank){
            colorArray[i+width] = colorArray[i]
            colorArray[i] = blank
        }
    }
}


  const createBoard = () => {
    const randomColorArrangement = []
    for(let i=0; i<width*width; i++){
      const randomColor = candyColors[Math.floor(Math.random()*candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
    return randomColorArrangement
  }

  export{
    width,
    checkForColumnOfFour,
    checkForRowOfFour,
    checkForColumnOfThree,
    checkForRowOfThree,
    moveIntoSquareBelow,
    createBoard
  }