import React, { useEffect, useState } from 'react'
import BingoGridItem from './bingo-grid-item.jsx'
import { v4 as uuidv4 } from 'uuid';
import checkBingo from '../helpers/check-bingo.js'

function BingoGrid(props) {
  const [activeCells, setActiveCells] = useState(new Set(['12']))
  const [hasBingo, setHasBingo] = useState(false)
  const [winningCells, setWinningCells] = useState([]);
  const [shuffledBoard, setShuffledBoard] = useState([]);

  // Add shuffle function
  const shuffleBoard = () => {
    if (!props.buzzwords?.length) return

    const newBoard = [...props.buzzwords];
    // This is the Fisher-Yates (or Knuth) shuffle algorithm
    // It works by:
    // 1. Starting from the last element (i)
    // 2. Picking a random element from index 0 to i (j)
    // 3. Swapping elements at positions i and j
    // 4. Moving backwards through the array
    // This gives an unbiased shuffle in O(n) time
    for (let i = newBoard.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newBoard[i], newBoard[j]] = [newBoard[j], newBoard[i]];
    }
    // Take only the first 24 items (25th will be FREE space)
    setShuffledBoard(newBoard.slice(0, 24));
  }

  const handleReset = () => {
    setActiveCells(new Set(['12'])); // Reset to only FREE space
    setHasBingo(false);
    setWinningCells([]);
    shuffleBoard();
  };

  // Initialize board on first render
  useEffect(() => {
    if (!props.buzzwords?.length) return
    shuffleBoard();
  }, [props.buzzwords]);

  const handleCellClick = (index) => {
    if (index === 12) return;

    setActiveCells(prev => {
      const newActiveCells = new Set(prev);
      if (newActiveCells.has(index.toString())) {
        newActiveCells.delete(index.toString());
      } else {
        newActiveCells.add(index.toString());
      }
      return newActiveCells;
    });
  };

  useEffect(() => {
    if (activeCells.size >= 5) {
      const { hasBingo: bingo, winningCells: winners } = checkBingo(
        Array.from(activeCells).map(Number)
      );
      setHasBingo(bingo);
      setWinningCells(winners);
    }
  }, [activeCells]);

  const renderGrid = () => {
    if (!shuffledBoard?.length) return

    var bingoBoard = [...shuffledBoard]
    bingoBoard.splice(12, 0, { value: 'FREE', id: 'free' })

    return bingoBoard.map(
      (item, index) => (
        <BingoGridItem
          key={item.id + '-' + uuidv4()}
          id={item.id}
          index={index}
          buzzword={item.value}
          active={activeCells.has(index.toString() || index === 12)}
          isWinning={winningCells.includes(index)}
          onClick={index === 12 ? undefined : () => handleCellClick(index)}
        />
      )
    )
  }

  return (
    <div className="relative">
      {hasBingo && (
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="mb-4 text-3xl font-bold text-green-600">BINGO!</h2>
          <p className="mb-4 text-xl">Congratulations, you've won!</p>
        </div>
      )}
      <div className="grid grid-cols-5 gap-1 my-4 sm:gap-4">
        {renderGrid()}
      </div>
      <button 
        className="p-4 text-lg font-bold text-gray-900 transition-colors duration-200 bg-green-300 rounded hover:bg-green-400"
        onClick={handleReset}
      >
        Reset & Shuffle
      </button>
    </div>
  )
}

export default BingoGrid
