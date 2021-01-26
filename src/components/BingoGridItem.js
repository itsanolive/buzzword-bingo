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
        let defaultStyles = 'p-3 rounded border-2 border-white text-center break-words '
        let activeStyles = 'bg-green-300 text-gray-800 font-bold'
        let inactiveStyles = 'text-white'
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
