import "./App.css";
import Game from "./components/Game/Game";

function App() {
  return (
    <>
      <header>
        <h3>Tic Tac Toe</h3>
      </header>
      <main className="main">
        <p>It's a game of tic tac toe.</p>
        <Game />
      </main>
    </>
  );
}

export default App;
