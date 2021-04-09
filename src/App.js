import './App.css'
import { buzzwordList } from './buzzwords'
import { Helmet } from 'react-helmet'
// import DarkModeToggle from './components/DarkModeToggle'
import BingoGrid from './components/BingoGrid'
import BingoWordBank from './components/BingoWordBank'
import LinkExternal from './components/LinkExternal'

function App() {

  // * dark mode toggle
  // function darkToggle() {

  // }

  const shuffledBuzzwords = buzzArr => {
    let currentIndex = buzzArr.length,
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
      temporaryValue = buzzArr[currentIndex]
      buzzArr[currentIndex] = buzzArr[randomIndex]
      buzzArr[randomIndex] = temporaryValue
    }
    return buzzArr.slice(0, 25)
  }

  // TODO: RENDER FULL BUZZWORDS BANK

  // TODO: FILTER TO 24 FOR BINGO BOARD CARDS, SAVE TO BROWSER STORAGE WITH SIDE EFFECT
  const bingoBoard = shuffledBuzzwords(buzzwordList)
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
      <main className="min-h-screen bg-gray-50 dark:bg-gray-800">
        <header className="Header flex w-full bg-green-300 py-4 px-2 shadow-md border-gray-900">
          <div className="container flex mx-auto">
            <div className="w-1/4">
              {/* <DarkModeToggle></DarkModeToggle> */}
            </div>
            <div className="w-1/2">
              <h1 className="text-center text-3xl text-gray-900 font-bold uppercase">Buzzword Bingo!</h1>
            </div>
            <div className="w-1/4 Nav__right">
              <LinkExternal
                label="Github"
                icon="github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/itsanolive/buzzword-bingo"
                className="text-gray-900 text-lg rounded p-1 hover:text-green-300 hover:bg-gray-900">
              </LinkExternal>
              {/* <a target="_blank" rel="noopener noreferrer" href="https://github.com/itsanolive/buzzword-bingo" className="text-gray-900 text-lg rounded p-1 hover:text-green-300 hover:bg-gray-900"><FaGithub /></a> */}
            </div>
          </div>
        </header>
        <div id="bingo-container" className="w-full p-1 md:px-2 md:py-10">
          <section id="bingo" className="container max-w-screen-md p-1 md:p-2 mx-auto">
            <BingoGrid buzzwords={bingoBoard} />
            <button className="rounded p-4 bg-green-300 text-gray-900 text-lg font-bold disabled:opacity-50" onClick={refreshPage}>Reset & Shuffle</button>
          </section>
        </div>
        <div class="BingoWordBank--container">
          <h2 class="text-gray-900 dark:text-green-300 font-bold text-2xl my-6">Buzzword Bank</h2>
          <BingoWordBank activeBuzzwords={bingoBoard} buzzwords={buzzwordList} />
        </div>
        <footer className="bg-gray-900 text-green-300">
          <div className="container flex flex-col py-4 mx-auto text-center">
            <div className="Footer__BuiltWith sm:w-1/2 mx-auto my-6">
              <p className="pb-4">Built with</p>
              <div className="Footer__BuiltWith--IconContainer grid grid-cols-4 gap-2 text-2xl">
                <LinkExternal
                  label="ReactJS"
                  iconClassName="Footer__BuiltWith--Icon pr-2"
                  icon="react"
                  href="https://reactjs.org/">
                </LinkExternal>
                <LinkExternal
                  label="TailwindCSS"
                  iconClassName="Footer__BuiltWith--Icon pr-2"
                  icon="tailwindcss"
                  href="https://tailwindcss.com/">
                </LinkExternal>
                <LinkExternal
                  label="NodeJS"
                  iconClassName="Footer__BuiltWith--Icon pr-2"
                  icon="nodejs"
                  href="https://nodejs.org/en/">
                </LinkExternal>
                <LinkExternal
                  label="NPM"
                  iconClassName="Footer__BuiltWith--Icon pr-2"
                  icon="npm"
                  href="https://www.npmjs.com/">
                </LinkExternal>

                {/* <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reactjs.org/"
                  aria-label="ReactJS" className="flex">
                  <FaReact className="Footer__BuiltWith--Icon pr-2" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tailwindcss.com/"
                  aria-label="TailwindCSS"
                  className="flex">
                  <SiTailwindcss className="Footer__BuiltWith--Icon pr-2" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://nodejs.org/en/"
                  aria-label="NodeJS"
                  className="flex">
                  <FaNode className="Footer__BuiltWith--Icon pr-2" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.npmjs.com/"
                  aria-label="NPM"
                  className="flex">
                  <SiNpm className="Footer__BuiltWith--Icon pr-2" />
                </a> */}
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
