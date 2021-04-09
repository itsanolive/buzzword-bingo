import React, { Component } from 'react'
import BingoWordBankItem from './BingoWordBankItem.js'
import { v4 as uuidv4 } from 'uuid';

class BingoWordBank extends Component {
    constructor(props) {
        super(props)
        this.renderWordBank = this.renderWordBank.bind(this)
    }

    renderWordBank = () => {
        var fullList = this.props.buzzwords
        var activeList = this.props.activeBuzzwords.map ( item => { return item.value })

        return fullList.map(
            (item) => activeList.indexOf(item.value) > -1 ?
                <BingoWordBankItem
                    key={item.id + '-' + uuidv4()}
                    buzzword={item.value}
                    active />
                :
                <BingoWordBankItem
                    key={item.id + '-' + uuidv4()}
                    buzzword={item.value} />
        )
    }

    render() {
        return (
            <div class="BingoWordBank">
                {this.renderWordBank()}
            </div>
        )
    }
}

export default BingoWordBank
