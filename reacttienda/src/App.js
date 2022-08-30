/* import logo from './logo.svg'; */
import './App.css';
import ItemCounter from './components/Items/ItemCounter';
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
      <ItemCounter stock="3"/>
    </div>
    </>
  );
}

export default App;
