import DataGUI from "./components/DataGUI/DataGUI";
import Header from "./components/Header/Header";

function App() {
  return (
    <main className="flex items-center flex-col gap-y-4">
      <Header />
      <DataGUI />
    </main>
  );
}

export default App;
