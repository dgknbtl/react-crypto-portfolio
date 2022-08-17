import Header from "./components/Header";
import Chart from "./components/Chart";
import AssetList from "./components/AssetList";

function App() {
  return (
    <div className="App flex items-center justify-center h-full">
      <main className="w-[390px] h-[700px] border border-gray-200 shadow-lg rounded-[20px]">
        <Header />
        <Chart />
        <AssetList />
      </main>
    </div>
  );
}

export default App;
