import BingoGrid from './components/BingoGrid.js'
import { buzzwordList } from './buzzwords'

function App() {

  // TODO: RENDER FULL BUZZWORDS BANK

  // TODO: FILTER TO 24 FOR BINGO BOARD CARDS, SAVE TO BROWSER STORAGE WITH SIDE EFFECT
  const bingoBoard = buzzwordList.slice(0, 25)
  console.log(bingoBoard);

  // TODO: SERVE SHUFFLED ARRAY BACK TO BingoGrid AND SAVE TO BROWSER STORAGE AGAIN
  // function shuffleClick() {
  //   console.log('click');
  //   var currentIndex = bingoBoard.length,
  //     temporaryValue,
  //     randomIndex

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(
  //       Math.random() * currentIndex,
  //     )
  //     currentIndex -= 1
  //     // console.log(array, currentIndex)

  //     // And swap it with the current element.
  //     temporaryValue = bingoBoard[currentIndex]
  //     bingoBoard[currentIndex] = bingoBoard[randomIndex]
  //     bingoBoard[randomIndex] = temporaryValue
  //   }
  // }

  return (
    <div className="App">
      <main className="bg-gray-900">
        <div className="w-full min-h-screen text-blue-100 p-2">
          <h1 className="text-center my-4 text-2xl font-bold text-green-300 uppercase">Buzzword Bingo!</h1>
          <section id="bingo" className="container p-2">
            <BingoGrid buzzwords={bingoBoard} />
            {/* <button disabled className="rounded p-4 bg-blue-100 text-gray-900 font-bold disabled:opacity-50" onClick={shuffleClick}>Shuffle</button> */}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
