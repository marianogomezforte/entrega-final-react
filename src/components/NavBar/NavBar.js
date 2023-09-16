import logo from './assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-zinc-900 flex h-36">
            <Link to="/">
                <img className="flex-initial ms-3 rounded-full w-36 h-36 self-center" src={logo} alt="logo"/>
            </Link>
            
            <div className="flex-auto self-center">
                <Link to="/category/conservas">
                    <button type="button" className="w-52 drop-shadow-lg bg-gradient-to-r from-zinc-800 rounded-md text-2xl p-2 m-6 text-stone-100">Conservas</button>
                </Link>
                <Link to="/category/aceites">
                    <button type="button" className="w-52 drop-shadow-lg bg-gradient-to-r from-zinc-800 rounded-md text-2xl p-2 m-6 text-stone-100">Aceites</button>
                </Link>
                <Link to="/">
                    <button type="button" className="w-52 drop-shadow-lg bg-gradient-to-r from-zinc-800 rounded-md text-2xl p-2 m-6 text-stone-100">Nosotros</button>
                </Link>
                <Link to="/">
                    <button type="button" className="w-52 drop-shadow-lg bg-gradient-to-r from-zinc-800 rounded-md text-2xl p-2 m-6 text-stone-100">Contacto</button>
                </Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;