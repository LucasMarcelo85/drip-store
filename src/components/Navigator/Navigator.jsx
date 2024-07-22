import './Navigator.css'

import { NavLink } from "react-router-dom";

export function Navigator() {
    return (
        <nav className="nav">
            <ul className="home">
                <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                <li><NavLink to="/produtos" activeClassName="active-link">Produtos</NavLink></li>
                <li><NavLink to="/" activeClassName="active-link">Categorias</NavLink></li>
                <li><NavLink to="/" activeClassName="active-link">Meus Pedidos</NavLink></li>
            </ul>
        </nav>
    );
}