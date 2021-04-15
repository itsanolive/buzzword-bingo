import React, { Component } from 'react'
import Icon from './Icon'

// * Header dark/light mode toggle
class DarkModeToggle extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            dark: this.setDark(this.props.mode)
        }
        this.darkToggle = this.darkToggle.bind(this)
    }

    setDark(mode) {
        if ( mode === 'dark' ) {
            return true
        } else {
            return false
        }
    }

    darkToggle = () => {
        if (this.state.dark === true) {
            this.setState({
                dark: false
            })
        } else {
            this.setState({
                dark: true
            })
        }
        let container = document.getElementById('main')

        if (container.classList.contains('dark')) {
            container.classList.remove('dark')
        } else {
            container.classList.add('dark')
        }
    }

    render() {
        let lightDefault = 'mx-2 light-icon'
        let darkDefault = 'mx-2 dark-icon'
        let toggleDefault = 'toggle'
        let activeStyles = ' active'
        let inactiveStyles = ''
        let toggleLightClasses = toggleDefault + (this.state.dark ? inactiveStyles : activeStyles)
        let toggleDarkClasses = toggleDefault + (this.state.dark ? activeStyles : inactiveStyles)
        let lightClasses = lightDefault + (this.state.dark ? inactiveStyles : activeStyles)
        let darkClasses = darkDefault + (this.state.dark ? activeStyles : inactiveStyles)

        return (
            <div id="DarkModeToggle"
                onClick={this.darkToggle}>
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
        )
    }
}

// * Default to media selection, but allow user to change manually


export default DarkModeToggle
