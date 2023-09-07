import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <main className="navbar-main">
      <NavBar />
      <ItemListContainer greeting="Greeting" />
    </main>
  );
}

export default App
