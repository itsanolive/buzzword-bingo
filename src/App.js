import './App.css'
import BingoGrid from './components/BingoGrid.js'
import { buzzwordList } from './buzzwords'
import { Helmet } from 'react-helmet';
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiNpm } from 'react-icons/si';

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

  var today = new Date();
  var year = today.getFullYear();

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Buzzword Bingo</title>
        <meta name="description" content="Track business buzzwords and win back some sanity during meetings"/>

      </Helmet>
      <main className="bg-gray-50 dark:bg-gray-900">
        <header className="Header flex w-full bg-green-300 dark:bg-gray-900 py-4 shadow-md border-gray-900">
          <div className="container flex mx-auto">
            <div className="w-1/4"></div>
            <div className="w-1/2">
              <h1 className="text-center text-2xl text-gray-900 font-bold dark:text-green-300 uppercase">Buzzword Bingo!</h1>
            </div>
            <div className="w-1/4 Nav__right">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/itsanolive/buzzword-bingo" className="text-gray-900 rounded p-1 hover:text-green-300 hover:bg-gray-900"><FaGithub /></a>
            </div>
          </div>
        </header>
        <div className="w-full min-h-screen p-1 md:p-2">
          <section id="bingo" className="container max-w-screen-md p-1 md:p-2 mx-auto">
            <BingoGrid buzzwords={bingoBoard} />
            <button className="rounded p-4 bg-green-300 text-gray-900 font-bold disabled:opacity-50" onClick={refreshPage}>Reset & Shuffle</button>
          </section>
        </div>
        <footer className="bg-gray-900 text-green-300">
          <div className="container flex flex-col py-4 mx-auto text-center">
            <div className="Footer__BuiltWith sm:w-1/2 mx-auto my-6">
              <p className="pb-4">Built with</p>
              <div className="Footer__BuiltWith--IconContainer grid grid-cols-4 gap-2 text-2xl">
                <span className="flex">
                  <FaReact className="Footer__BuiltWith--Icon pr-2" />
                </span>
                <span className="flex">
                  <SiTailwindcss className="Footer__BuiltWith--Icon pr-2" />
                </span>
                <span className="flex">
                  <FaNode className="Footer__BuiltWith--Icon pr-2" />
                </span>
                <span className="flex">
                  <SiNpm className="Footer__BuiltWith--Icon pr-2" />
                </span>
              </div>
            </div>
            <p>&copy; Olivia Beaty, {year} </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
