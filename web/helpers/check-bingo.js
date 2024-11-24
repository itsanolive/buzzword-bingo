const checkBingo = () => {
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

export default checkBingo;
