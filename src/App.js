import './App.css';
import { useEffect, useState } from 'react';
import {Characters} from "./components/Characters"

function App() {

  const [characterList, setcharacterList] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((response) => setcharacterList(response.results))
    .catch((err) => console.log(err))
  }, [])

  console.log(characterList)

  return (
    <div className="App">
      <div className="App-header">
      <h2>Meus Personagens</h2>
        <Characters characterList={characterList} />
      </div>
    </div>
  );
}

export default App;
