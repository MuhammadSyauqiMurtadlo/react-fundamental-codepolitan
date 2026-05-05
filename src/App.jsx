import "./App.css";
import Homepage from "./pages/Index";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "Syauqi Murtadlo",
  };
  return (
    <>
      <div className="App">
        <GlobalContext.Provider value={user}>
          <Homepage />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
