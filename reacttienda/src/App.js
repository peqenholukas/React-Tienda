/* import logo from './logo.svg'; */
import './App.css';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <>
      <NavBar />
    <div className="container">
      <h1>¡Hola mundo!</h1>
      <h3>Otro texto</h3>
      <ItemListContainer />
    </div>
    </>
  );
}

export default App;
