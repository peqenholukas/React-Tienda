import './NavBar.css';
import CartWidget from './CartWidget';
import Counter from './Counter';

function NavBar() {
    return (
        <>
            <section id='header'>
                <a href="#" id='logo-prin'>industrias<span>adatto</span></a>
                <div>
                    <ul id='navbar'>
                        <li><a href="#" className='active'>Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Noticias</a></li>
                        <li><a href="#">Contacto</a></li>
                        <CartWidget />
                        <Counter />
                    </ul>
                </div>
            </section>
        </>
    )
}

export default NavBar