import './App.css';
import { useEffect, useState } from 'react';
import {Characters} from "./components/Characters"

function App() {

  const [characterList, setcharacterList] = useState([])

  const [next, setNext] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${next}`)
    .then((response) => response.json())
    .then((response) => setcharacterList(response.results))
    .catch((err) => console.log(err))
  }, [next])

  console.log(characterList)

  const previousPage = () => {
    if(next > 1) {
    setNext(next - 1)
    }
  }

  const nextPage = () => {
    setNext(next + 1)

  }

  return (
    <div className="App">
      <div className="App-header">
      <h2>Meus Personagens</h2>
        <Characters characterList={characterList} />
      </div>

      <div className="buttons">
        <button onClick={previousPage}>Voltar</button>
        <button onClick={nextPage}>Avançar</button>
      </div>
    </div>
  );
}

export default App;
