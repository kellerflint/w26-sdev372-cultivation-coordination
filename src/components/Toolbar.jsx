import PlotList from "./PlotList.jsx";
import Search from "./Search.jsx";

export default function Toolbar({plots, onChangeSeed, currentPlotId, onSelectPlot, onOpenNewPlot,}) {
  return (
    <aside className="toolbar">
      <h2 className="toolbarTitle">Toolbar</h2>

      <section>
        <h3>My plots</h3>
        <PlotList
          plots={plots}
          selectPlot={(idx) => {
            const plot = plots[idx];
            if (!plot) return onSelectPlot(null);
            return onSelectPlot(plot.id ?? null);
          }}
        />

        <button className="toolbarPrimary" type="button" onClick={onOpenNewPlot}>
          New plot
        </button>

        <Search onChangeSeed={onChangeSeed} />
      </section>
    </aside>
  );
}