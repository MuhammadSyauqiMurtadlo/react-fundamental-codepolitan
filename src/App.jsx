import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <>
      <div className="App">
        <Article name="Syauqi" titles={["React js", "Vue js"]} />
        <br />
        <Article name="Murtadlo" titles={["Angular", "Svelte"]} />
      </div>
    </>
  );
}

export default App;
