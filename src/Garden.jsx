import { useState } from "react";
import Plot from "./Plot";
import PlotList from "./PlotList";
export default function Garden() {
    const [plots, setPlots] = useState([]);
    const [currentPlot, setCurrentPlot] = useState(null);
    function selectPlot(id) {
        setCurrentPlot(id)
    }

    function createPlot(width, length) {
        const plot = <Plot width={width} length={length} />
        setPlots([...plots, plot]);
    }

    function submitForm(formData) {
        const length = formData.get("length")
        const width = formData.get("width")
        createPlot(width, length)
        console.log("plots: " + plots)
    }

    return (
        <div>
            <h1>Garden</h1>
            <form action={submitForm}>
                <input id="name" name="name" type="text" placeholder="Plot Name" />
                <input id="description" name="description" type="text" placeholder="Plot Description" />
                <input id="length" name="length" type="number" placeholder="Length (ft)" />
                <input id="width" name="width" type="number" placeholder="Width (ft)" />
                <button type="submit">Add Plot</button>
            </form>
            <PlotList plots={plots} selectPlot={selectPlot} />
            {currentPlot && (
                plots[currentPlot]
            )}
        </div>
    )
}