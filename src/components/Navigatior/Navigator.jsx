import './Navigator.css'

import { NavLink } from "react-router-dom";

export function Navigator() {
    return (
        <nav className="nav">
            <ul className="home">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/produtos">Produtos</NavLink></li>
                <li><NavLink to="/">Categorias</NavLink></li>
                <li><NavLink to="/">Meus Pedidos</NavLink></li>
            </ul>
        </nav>
    );
}