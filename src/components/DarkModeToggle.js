import React, { useState, useEffect } from 'react';
import Icon from './Icon'

// * Header dark/light mode toggle
const DarkModeToggle = ({props}) => {
    // const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // setDarkMode(window.matchMedia("(prefers-color-scheme: dark)"))
    })

    return (
        <div id="DarkModeToggle">
            <Icon name="sun"></Icon>
            <Icon name="toggle-left"></Icon>
            <Icon name="toggle-right"></Icon>
            <Icon name="moon"></Icon>
        </div>
    )
}

// * Default to media selection, but allow user to change manually


export default DarkModeToggle;
