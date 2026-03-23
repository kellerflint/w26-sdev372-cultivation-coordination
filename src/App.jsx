import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Garden from './components/Garden';
import Toolbar from './components/Toolbar';
import NewPlotModal from './components/NewPlotModal';
import { deletePlot, fetchPlots, savePlot } from './api/plots';

function App() {
  const [plots, setPlots] = useState([]);
  const [currentPlotId, setCurrentPlotId] = useState(null);
  const [currentSeed, setCurrentSeed] = useState('Dirt');
  const [newPlotOpen, setNewPlotOpen] = useState(false);
  
  const getPlots = () => {
    fetchPlots()
      .then((data) => setPlots(data))
      .catch(() => setPlots([]));
  };

  useEffect(() => {
    getPlots();
  }, []);

  const currentPlot = useMemo(
    () => plots.find((p) => p.id === currentPlotId) ?? null,
    [plots, currentPlotId]
  );

  function createPlotGrid(width, length) {
    const grid = [];
    for (let i = 0; i < width; i++) {
      const row = [];
      for (let j = 0; j < length; j++) row.push('Dirt');
      grid.push(row);
    }
    return grid;
  }

  async function onCreatePlot({ name, description, width, length }) {
    const plot = {
      name,
      description,
      plants: createPlotGrid(width, length),
    };

    // Immediately persist so the plot always has a DB id.
    const saved = await savePlot(plot);
    setPlots((prev) => [...prev, saved]);
    setCurrentPlotId(saved.id);
  }

  function onPlant(seed, index) {
    setPlots((prev) =>
      prev.map((p) => {
        if (p.id !== currentPlotId) return p;
        const newPlants = p.plants.map((row) => row.slice());
        newPlants[index.i][index.j] = seed;
        return { ...p, plants: newPlants };
      })
    );
  }

  async function onSaveCurrentPlot() {
    const plot = plots.find((p) => p.id === currentPlotId);
    if (!plot) return;

    const saved = await savePlot({
      id: plot.id,
      name: plot.name,
      description: plot.description,
      plants: plot.plants,
    });

    setPlots((prev) => prev.map((p) => (p.id === currentPlotId ? saved : p)));
    setCurrentPlotId(saved.id);
  }

  async function onDeleteCurrentPlot() {
    const plot = plots.find((p) => p.id === currentPlotId);
    if (!plot) return;

    await deletePlot(plot.id);
    setPlots((prev) => prev.filter((p) => p.id !== plot.id));
    setCurrentPlotId(null);
  }

  return (
    <div className="appLayout">
      <Toolbar
        plots={plots}
        onChangeSeed={setCurrentSeed}
        currentPlotId={currentPlotId}
        onSelectPlot={setCurrentPlotId}
        onOpenNewPlot={() => setNewPlotOpen(true)}
      />

      <main className="appMain">
        <h1>Home</h1>

        {currentPlotId != null && (
          <div className="plotActions">
            <button onClick={onSaveCurrentPlot}>Save plot</button>
            <button onClick={onDeleteCurrentPlot}>Delete plot</button>
          </div>
        )}
        
        <Garden
          currentSeed={currentSeed}
          plot={currentPlot}
          onPlant={onPlant}
        />
      </main>

      <NewPlotModal
        open={newPlotOpen}
        onClose={() => setNewPlotOpen(false)}
        onSubmit={onCreatePlot}
      />
    </div>
  );
}

export default App;
