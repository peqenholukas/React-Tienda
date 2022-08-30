/* import logo from './logo.svg'; */
import './App.css';
import ItemCount from './components/Items/ItemCount';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  const mensaje = `Bienvenido a react`

  return (
    <>
      <NavBar />
    <div className="container">
      <h1>¡Hola mundo!</h1>
      <h3>Otro texto</h3>
      <ItemCount stock="50" initial="35"/>
    </div>
    </>
  );
}

export default App;
