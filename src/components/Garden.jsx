import Plot from "./Plot.jsx";

export default function Garden({ currentSeed, plot, onPlant }) {
    return (
        <div>
            <h2>Garden Creation</h2>
            {plot && <Plot seed={currentSeed} plot={plot} onPlant={onPlant} />}
        </div>
    )
}