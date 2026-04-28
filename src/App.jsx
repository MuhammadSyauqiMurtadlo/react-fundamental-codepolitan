import "./App.css";
import Homepage from "./pages/Index";

function App() {
  const value = false;
  return (
    <>
      <div className="App">
        {value ? "benar" : "salah"}
        <Homepage />
      </div>
    </>
  );
}

export default App;
