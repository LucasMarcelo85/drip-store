import "./Header.css";

import headerlogo from "./../../../public/svgs/logo-header.svg";
import minicart from "./../../../public/svgs/mini-cart.svg";
import lupa from "./../../../public/svgs/Search.svg";

import { Navigator } from '../Navigator/Navigator';

export function Header() {
    return (

        <header className="header-container">

            <section>
                <img src={headerlogo} alt="logo header" />

                <label>
                    <input type="text" placeholder="Pesquisar produto" />
                    <img src={lupa} alt="lupa logo" />
                </label>

                <div>
                    <a href="#"> Cadastra-se </a>
                    <button>Entrar</button>
                </div>

                <img className="cart-img" src={minicart} alt="mini cart logo" />
            </section>

            <Navigator className="navigator-container" />
        </header>
    );
}


