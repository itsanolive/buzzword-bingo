import React, { useState, useEffect } from 'react';
import Icon from './icon';

const DarkModeToggle = (props) => {
  const [dark, setDark] = useState(() => setInitialDark(props.mode));

  function setInitialDark(mode) {
    return mode === 'dark';
  }

  const darkToggle = () => {
    setDark(!dark);
    let container = document.getElementById('main');
    if (container.classList.contains('dark')) {
      container.classList.remove('dark');
    } else {
      container.classList.add('dark');
    }
  };

  useEffect(() => {
    // This effect could be used for any initialization or cleanup.
    // For this example, it's left empty.
  }, []);

  let lightDefault = 'mx-2 light-icon';
  let darkDefault = 'mx-2 dark-icon';
  let toggleDefault = 'toggle';
  let activeStyles = ' active';
  let inactiveStyles = '';
  let toggleLightClasses = toggleDefault + (dark ? inactiveStyles : activeStyles);
  let toggleDarkClasses = toggleDefault + (dark ? activeStyles : inactiveStyles);
  let lightClasses = lightDefault + (dark ? inactiveStyles : activeStyles);
  let darkClasses = darkDefault + (dark ? activeStyles : inactiveStyles);

  return (
    <div id="DarkModeToggle" onClick={darkToggle}>
      <div className={lightClasses}>
        <Icon name="sun"></Icon>
      </div>
      <div className={toggleLightClasses}>
        <Icon name="toggle-left"></Icon>
      </div>
      <div className={toggleDarkClasses}>
        <Icon name="toggle-right"></Icon>
      </div>
      <div className={darkClasses}>
        <Icon name="moon"></Icon>
      </div>
    </div>
  );
};

export default DarkModeToggle;
