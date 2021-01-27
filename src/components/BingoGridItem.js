import React, { Component } from 'react'

class BingoGridItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: this.initActive(this.props.id)
        }
        this.toggleActive = this.toggleActive.bind(this)
    }

    initActive(key) {
        if (key === 'free') {
            return true;
        } else {
            return false;
        }
    }

    toggleActive() {
        if (this.props.id !== 'free') {
            const currentState = this.state.active
            this.setState({ active: !currentState })
        }
    }

    render() {
        let defaultStyles = 'BingoGridItem p-1 sm:p-2 rounded border-2 border-gray-900 dark:border-white text-center md:font-bold break-all md:break-normal text-xs md:text-base '
        let activeStyles = 'bg-gray-900 text-green-300 border-green-300 dark:bg-green-300 dark:text-gray-800 shadow-lg'
        let inactiveStyles = 'text-gray-900 dark:text-white'
        let classNames = defaultStyles + (this.state.active ? activeStyles : inactiveStyles)

        return (
            <div
                id={this.props.id}
                onClick={this.toggleActive}
                className={classNames} >
                {this.props.buzzword}
            </div>
        )
    }
}

export default BingoGridItem
