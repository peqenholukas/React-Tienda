/* import logo from './logo.svg'; */
import './App.css';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetail from './components/Items/ItemDetail';


function App() {

  return (
    <>
      <NavBar />
    <div className="container">
      <h1>¡Hola mundo!</h1>
      <h3>Otro texto</h3>
      <ItemListContainer />
      <ItemDetail />
    </div>
    </>
  );
}

export default App;
