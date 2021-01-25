import BingoGrid from './components/BingoGrid.js'

function App() {
  const buzzwords = [
    {id: 'buzzword1', value: 'Buzzword phrase 1'},
    {id: 'buzzword2', value: 'Buzzword phrase 2'},
    {id: 'buzzword3', value: 'Buzzword phrase 3'},
    {id: 'buzzword4', value: 'Buzzword phrase 4'},
    {id: 'buzzword5', value: 'Buzzword phrase 5'},
  ]

  return (
    <div className="App">
      <div className="w-full min-h-screen bg-gray-900 text-blue-100 p-2">
        <h1 className="text-center my-4">Buzzword Bingo!</h1>
        <section id="bingo">
          <BingoGrid buzzwords={buzzwords} />
        </section>
      </div>
    </div>
  );
}

export default App;
