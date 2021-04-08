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

    // * original toggleActive function
    // toggleActive() {
    //     if (this.props.id !== 'free') {
    //         const currentState = this.state.active
    //         this.setState({ active: !currentState })
    //     }
    // }

    // * test toggleActive with callback function
    toggleActive() {
        if (this.props.id !== 'free') {
            const currentState = this.state.active
            this.setState({ active: !currentState }, () => {
                if (this.props.onClick) {
                    this.props.onClick(this);
                }
            })
        }
    }

    render() {
        let defaultStyles = 'BingoGridItem '
        let activeStyles = 'BingoGridItem--active'
        let inactiveStyles = ''
        let classNames = defaultStyles + (this.state.active ? activeStyles : inactiveStyles)

        return (
            <div
                id={this.props.id}
                onClick={this.toggleActive}
                className={classNames}
                data-active-cell={this.state.active} >
                {this.props.buzzword}
            </div>
        )
    }
}

export default BingoGridItem
