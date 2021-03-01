
import { useEffect, useState } from 'react';
import './App.css';
import Cost from './Components/Cost/Cost';
import Playerinfo from './Components/Playerinfo/Playerinfo';
import players from './data/data.json';

function App() {
  const [player, setPlayer] = useState([]);
  const [addPlayer, setAddPlayer] = useState([]);
  useEffect(() =>{
    setPlayer(players);
    players.map(player => player.name);
  }, [])

  const handleAddPlayer = (player) => {
    const addNewPlayer = [...addPlayer, player];
    setAddPlayer(addNewPlayer);
  }
  return (
    <div className="App">
      <div>
      <h1>Bangladesh Cricket Team</h1>
      <h2> Total Players: {players.length}</h2> 
      <h3>Selected Player: {addPlayer.length}</h3> 
      <Cost cart = {addPlayer}></Cost>
      </div>
      <div className="players">
        {
          player.map(player => <Playerinfo player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Playerinfo>)
        }
      </div>         
    </div>
    
  );
}

export default App;
