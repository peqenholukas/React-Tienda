import './NavBar.css';

function NavBar() {
    return (
        <>
            <section id='header'>
                <a href="#" id='logo-prin'>INDSTRIAS<span>ADATTO</span></a>

                <div>
                    <ul id='navbar'>
                        <li><a href="#" className='active'>Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Noticias</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default NavBar