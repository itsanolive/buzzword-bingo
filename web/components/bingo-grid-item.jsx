import React, { useState, useEffect } from 'react';

function BingoGridItem(props) {
  const defaultStyles = 'BingoGridItem text-xs md:text-base flex items-center justify-center min-h-16 p-2 text-center border-2 border-gray-300 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100 ';
  const activeStyles = 'BingoGridItem--active bg-green-300 hover:bg-green-400 border-green-500';
  const winningStyles = 'animate-pulse bg-yellow-400 border-yellow-600 ';
  const inactiveStyles = 'bg-white';
  const classNames = defaultStyles +
    (props.active ? activeStyles : inactiveStyles) +
    (props.isWinning ? winningStyles : '');

  return (
    <div
      id={props.id}
      onClick={props.id !== 'free' ? props.onClick : undefined}
      className={classNames}
      data-active-cell={props.active} >
      {props.buzzword}
    </div>
  );
}

export default BingoGridItem;
