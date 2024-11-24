import React, { useState, useEffect } from 'react';

function BingoGridItem(props) {
  const [active, setActive] = useState(initActive(props.id));

  function initActive(key) {
    return key === 'free';
  }

  useEffect(() => {
    setActive(initActive(props.id));
  }, [props.id]);

  const toggleActive = () => {
    if (props.id !== 'free') {
      setActive(!active);
      if (props.onClick) {
        props.onClick(this);
      }
    }
  };

  let defaultStyles = 'BingoGridItem ';
  let activeStyles = 'BingoGridItem--active';
  let inactiveStyles = '';
  let classNames = defaultStyles + (active ? activeStyles : inactiveStyles);

  return (
    <div
      id={props.id}
      onClick={toggleActive}
      className={classNames}
      data-active-cell={active} >
      {props.buzzword}
    </div>
  );
}

export default BingoGridItem;
