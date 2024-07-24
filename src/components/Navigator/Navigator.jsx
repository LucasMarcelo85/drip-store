import './Navigator.css'

import { NavLink, useLocation } from "react-router-dom";

export function Navigator() {

    const location = useLocation();

    const isActive = (url) => {
        if (location.pathname === url) {
            return "active";
        }

        return "";
    };

    return (
        <nav className="nav">
            <ul className="home">
                <li><NavLink to="/" exact className={isActive('/')}>Home</NavLink></li>
                <li><NavLink to="/produtos" className={isActive('/produtos')}>Produtos</NavLink></li>
                <li><NavLink to="/categorias" className={isActive('/categorias')}>Categorias</NavLink></li>
                <li><NavLink to="/pedidos" className={isActive('/pedidos')}>Meus Pedidos</NavLink></li>
            </ul>
        </nav>
    );
}