import React, { Component } from 'react'

class BingoGridItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
        this.toggleActive = this.toggleActive.bind(this)
    }

    toggleActive() {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }

    render() {
        let defaultStyles = 'p-2 rounded border-2 border-white text-center '
        let activeStyles = 'bg-green-300 text-gray-800 font-bold'
        let inactiveStyles = 'text-white'
        let classNames = defaultStyles + (this.state.active ? activeStyles : inactiveStyles)

        return (
            <div key={this.props.key}
                id={this.props.key}
                onClick={this.toggleActive}
                className={classNames} >
                {this.props.buzzword}
            </div>
        )
    }
}

export default BingoGridItem
