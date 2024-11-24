import React, { useEffect } from 'react'
import BingoGridItem from './bingo-grid-item.jsx'
import { v4 as uuidv4 } from 'uuid';
import checkBingo from '../helpers/check-bingo.js'

function BingoGrid(props) {
  useEffect(() => {
    checkBingo();
  }, [props.buzzwords]);

  const renderGrid = () => {
    var bingoBoard = props.buzzwords
    bingoBoard.splice(12, 1, { value: 'FREE', id: 'free' })

    return bingoBoard.map(
      (item) => <BingoGridItem key={item.id + '-' + uuidv4()} id={item.id} buzzword={item.value} onClick={checkBingo} />
    )
  }

  return (
    <div className="grid grid-cols-5 gap-1 sm:gap-4 my-4">
      {renderGrid()}
    </div>
  )
}

export default BingoGrid
