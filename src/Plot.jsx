import { useEffect, useState } from "react";

export default function Plot({ width, length }) {
    const [plot, setPlot] = useState([]);
    useEffect(() => {
        let newPlot = [];
        for (let i = 0; i < width; i++) {
            const row = [];
            for (let j = 0; j < length; j++) {
                row.push("dirt");
            }
            newPlot.push(row);
        }
        setPlot(newPlot);
    }, []);

    return (
        <div>
            <h1>Plot</h1>
            <table>
                <tbody>
                    {plot.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}