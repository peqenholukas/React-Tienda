import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetail from './components/Items/Shop/ItemDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*   <React.StrictMode> */
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route excat path='/' element = {<App />}/>
          <Route excat path='/productos' element = {<ItemListContainer />}/>
          <Route excat path='/productos/detail' element = {<ItemDetail />}/>
        </Routes>
      </BrowserRouter>
/*   </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
