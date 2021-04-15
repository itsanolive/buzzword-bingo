import React, { Component } from 'react'

class BingoWordBankItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: this.initActive(this.props.active)
        }
        // this.toggleActive = this.toggleActive.bind(this)
    }

    initActive = (prop) => {
        if (prop) {
            return true
        } else {
            return false
        }
    }

    render() {
        let defaultStyles = 'BingoWordBankItem '
        let activeStyles = 'BingoWordBankItem--active'
        let inactiveStyles = ''
        let classNames = defaultStyles + (this.state.active ? activeStyles : inactiveStyles)

        return (
            <div className={classNames}>
                {this.props.buzzword}
            </div>
        )
    }
}

export default BingoWordBankItem
