import React, { Component } from 'react'
import BingoGridItem from './BingoGridItem.js'

class BingoGrid extends Component {
    constructor(props) {
        super(props)
        this.renderGrid = this.renderGrid.bind(this)
    }

    renderGrid() {
        return this.props.buzzwords.map(
            (item, index) =>
            <BingoGridItem key={item.id} buzzword={item.value} />
        )
    }

    render() {
        return (
            <div className="grid grid-cols-5 gap-4 p-4">
                {this.renderGrid()}
            </div>
        )
    }
}

export default BingoGrid
