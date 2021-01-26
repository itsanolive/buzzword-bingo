import './App.css'
import BingoGrid from './components/BingoGrid.js'
import { buzzwordList } from './buzzwords'

function App() {

  // TODO: RENDER FULL BUZZWORDS BANK

  // TODO: FILTER TO 24 FOR BINGO BOARD CARDS, SAVE TO BROWSER STORAGE WITH SIDE EFFECT
  const bingoBoard = buzzwordList.slice(0, 25)
  // console.log(bingoBoard);

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
      <main className="bg-blue-100 dark:bg-gray-900">
        <header className="Header w-full bg-green-300 dark:bg-gray-900 py-4 shadow-md border-gray-900">
          <h1 className="text-center text-2xl text-gray-900 font-bold dark:text-green-300 uppercase">Buzzword Bingo!</h1>
        </header>
        <div className="w-full min-h-screen p-1 md:p-2">
          <section id="bingo" className="container p-1 md:p-2 mx-auto">
            <BingoGrid buzzwords={bingoBoard} />
            {/* <button disabled className="rounded p-4 bg-blue-100 text-gray-900 font-bold disabled:opacity-50" onClick={shuffleClick}>Shuffle</button> */}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
