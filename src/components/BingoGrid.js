import React, { Component } from 'react'
import BingoGridItem from './BingoGridItem.js'
import { v4 as uuidv4 } from 'uuid';

class BingoGrid extends Component {
    constructor(props) {
        super(props)
        this.renderGrid = this.renderGrid.bind(this)
    }

    // TODO: use a different method to update buzzword array state

    // TODO: use a separate method to add free space to the grid - if there's a way to insert it without adding to the array, that'd be great

    renderGrid() {
        // const bingoBoard = this.state.buzzwords
        // console.log('pre-splice', this.props.buzzwords);

        // ? Shuffle order of buzzwords on render
        var bingoBoard = this.props.buzzwords
        var currentIndex = bingoBoard.length,
            temporaryValue,
            randomIndex

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(
                Math.random() * currentIndex,
            )
            currentIndex -= 1
            // console.log(array, currentIndex)

            // And swap it with the current element.
            temporaryValue = bingoBoard[currentIndex]
            bingoBoard[currentIndex] = bingoBoard[randomIndex]
            bingoBoard[randomIndex] = temporaryValue
        }

        // * insert "free" into the array at index 12
        // TODO - FIGURE OUT WHY THIS ITEM IS DUPLICATED IN THE ARRAY BUT ONLY MAPPING ONE COMPONENT
        this.props.buzzwords.splice(12, 1, {value: 'FREE', id: 'free'})
        // console.log('post-splice', this.props.buzzwords);

        return this.props.buzzwords.map(
            (item) => <BingoGridItem key={item.id + '-' + uuidv4()} id={item.id} buzzword={item.value} />
        )
    }

    // shuffle() {
    //     console.log(this.state.buzzwords)
    //     this.setState(function(state) {
    //         // console.log(state.buzzwords);
    //         state.buzzwords.splice(12, 1)
    //         var array = state.buzzwords
    //         console.log('after splice', array);
    //         console.log('after splice', state.buzzwords);

    //         var currentIndex = this.state.buzzwords.length,
    //             temporaryValue,
    //             randomIndex

    //         // While there remain elements to shuffle...
    //         while (0 !== currentIndex) {
    //             // Pick a remaining element...
    //             randomIndex = Math.floor(
    //                 Math.random() * currentIndex,
    //             )
    //             currentIndex -= 1
    //             // console.log(array, currentIndex)

    //             // And swap it with the current element.
    //             temporaryValue = array[currentIndex]
    //             array[currentIndex] = array[randomIndex]
    //             array[randomIndex] = temporaryValue
    //         }
    //         return {
    //             buzzwords: array
    //         }
    //     })
    // }

    render() {
        return (
            <div className="grid grid-cols-5 gap-1 sm:gap-2 my-4">
                {this.renderGrid()}
            </div>
        )
    }
}

export default BingoGrid
