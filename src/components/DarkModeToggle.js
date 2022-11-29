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
        let lightDefault = 'mx-1 light-icon'
        let darkDefault = 'mr-1 dark-icon'
        let activeStyles = ' active'
        let inactiveStyles = ''
        let sunIcon = (this.state.dark ? 'sun-regular' : 'sun-solid')
        let moonIcon = (this.state.dark ? 'moon-solid' : 'moon-regular')
        let lightClasses = lightDefault + (this.state.dark ? inactiveStyles : activeStyles)
        let darkClasses = darkDefault + (this.state.dark ? activeStyles : inactiveStyles)

        return (
            <div class="toggleContainer"
                onClick={this.darkToggle}>
                <div className="toggleBox">
                    <div className={lightClasses}>
                        <Icon name={sunIcon}></Icon>
                    </div>
                    <div className={darkClasses}>
                        <Icon name={moonIcon}></Icon>
                    </div>
                </div>
            </div>
        )
    }
}

// * Default to media selection, but allow user to change manually


export default DarkModeToggle
