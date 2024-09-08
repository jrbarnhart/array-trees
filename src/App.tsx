import DataGUI from "./components/DataGUI/DataGUI";
import Graph from "./components/Graph/Graph";
import Header from "./components/Header/Header";

const phData = ["A", "B", "C", "D", "E", "F", "G"];
const phEdges: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [5, 6],
];

function App() {
  return (
    <main className="flex items-center flex-col gap-y-4 px-2">
      <Header />
      <DataGUI data={phData} edges={phEdges} />
      <Graph dataArray={phData} edgesArray={phEdges} />
    </main>
  );
}

export default App;
