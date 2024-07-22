import "./Header.css";

import headerlogo from "./../../../public/svgs/logo-header.svg";
import minicart from "./../../../public/svgs/mini-cart.svg";
import ellipse from "./../../../public/svgs/ellipse.svg";
import dois from "./../../../public/svgs/dois.svg";
import lupa from "./../../../public/svgs/search.svg";

import { Navigator } from '../Navigator/Navigator';

export function Header() {
    return (

        <header className="header-container">
            <section>
                <img src={headerlogo} alt="logo header" />

                <label>
                    <input type="text" placeholder="Pesquisar produto" />
                </label>
            </section>

            <Navigator />
        </header>
    );
}


