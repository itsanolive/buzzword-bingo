import React, { Component } from 'react'
import BingoGridItem from './BingoGridItem.js'
import { v4 as uuidv4 } from 'uuid';

class BingoGrid extends Component {
    constructor(props) {
        super(props)
        this.renderGrid = this.renderGrid.bind(this)
        // this.checkBingo = this.checkBingo.bind(this)
    }

    // TODO: use a different method to update buzzword array state

    // TODO: use a separate method to add free space to the grid - if there's a way to insert it without adding to the array, that'd be great

    // * if user gets bingo, do something
    checkBingo = () => {
        const returnBingo = (bingo) => {
            let bingoBg = document.getElementById('bingo-container')
            let bingoBgClasses = bingoBg.classList
            let hasBingo = false
            for (let i = 0; i < bingoBgClasses.length; i++) {
                const bingoBgClass = bingoBgClasses[i]
                if (bingoBgClass === 'BingoSuccess') {
                    hasBingo = true
                }
            }
            // console.log(bingoBgClasses);
            if (bingo.length === 0) {
                return false
            } else {
                let isBingo = bingo.every((val) => {return activeCells.indexOf(val) >= 0})
                if ( isBingo === true ) {
                    // alert('You got bingo!');
                    if (!hasBingo) {
                        bingoBgClasses.add('BingoSuccess')
                        // console.log('bingo');
                    }
                    return true
                } else {
                    if (hasBingo) {
                        // bingoBgClasses.remove('BingoSuccess')
                    }
                    return false
                }
            }
        }
        const vertBingo = (position) => {
            let bingo = []
            for ( let i = 0; i < 5; i++ ) {
                bingo.push(position)
                position += 5
            }
            // console.log('vert', returnBingo(bingo));
            returnBingo(bingo);
        }
        const horBingo = (position) => {
            let bingo = []
            // console.log('some check:', [0,5,10,15,20].some((element) => element === position));
            if ( [0,5,10,15,20].some((element) => element === position) ) {
                for ( let i = 0; i < 5; i++ )  {
                    bingo.push(position)
                    position += 1
                }
            }
            // console.log('horBingo array:', bingo);
            // console.log('hor', returnBingo(bingo));
            returnBingo(bingo);
        }
        const diagBingo = (position) => {
            let bingo = []
            if ( position === 0 ) {
                for (let i = 0; i < 5; i++) {
                    bingo.push(position)
                    position += 6
                }
            } else if ( position === 4 ) {
                for (let i = 0; i < 5; i++) {
                    bingo.push(position)
                    position += 4
                }
            }
            // console.log('diag', returnBingo(bingo));
            returnBingo(bingo);
        }

        let bingoCell = document.querySelectorAll('.BingoGridItem')
        let activeCells = []
        bingoCell.forEach(function(item, index) {
            let active = item.getAttribute('data-active-cell')
            if (active === 'true') {
                activeCells.push(index)
            }
        })

        // console.log(activeCells);

        if (activeCells.length > 4) {
           for (let i = 0; i < activeCells.length; i++) {
                let currentPos = activeCells[i]
                vertBingo(currentPos)
                horBingo(currentPos)
                diagBingo(currentPos)
           }
        }
    }

    renderGrid() {
        // const bingoBoard = this.state.buzzwords
        // console.log('pre-splice', this.props.buzzwords);

        // ? Shuffle order of buzzwords on render
        var bingoBoard = this.props.buzzwords

        // * insert "free" into the array at index 12
        // TODO - FIGURE OUT WHY THIS ITEM IS DUPLICATED IN THE ARRAY BUT ONLY MAPPING ONE COMPONENT
        bingoBoard.splice(12, 1, {value: 'FREE', id: 'free'})
        // console.log('post-splice', this.props.buzzwords);

        return bingoBoard.map(
            (item) => <BingoGridItem key={item.id + '-' + uuidv4()} id={item.id} buzzword={item.value} onClick={this.checkBingo} />
        )
    }

    render() {
        return (
            <div className="grid grid-cols-5 gap-1 sm:gap-4 my-4">
                {this.renderGrid()}
            </div>
        )
    }
}

export default BingoGrid
