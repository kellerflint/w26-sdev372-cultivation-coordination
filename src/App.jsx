import { useState } from 'react';
import './App.css';
import Garden from './components/Garden';
import { fetchPlants } from './api/plants';
import { fetchPlots } from './api/plots';

function App() {
  const [plants, setPlants] = useState([]);
  const [plots, setPlots] = useState([]);
  const [currentPlot, setCurrentPlot] = useState(null);
  
  const getPlots = () => {
    fetchPlots()
      .then((data) => setPlots(data))
      .catch(() => setPlots([]));
  };

  const getPlants = () => {
    fetchPlants()
      .then((data) => setPlants(data))
      .catch(() => setPlants([]));
  };

  return (
    <div>
      <h1>Home</h1>
      <Garden />
      <button className="scientific" onClick={getPlants}>
        Request Scientific Plant Names
      </button>
      {plants.length > 0 && (
        <ul>
          {plants.map((plant) => (
            <li key={plant.id}>
              Name: {plant.common_name} Scientific Name: {plant.scientific_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
