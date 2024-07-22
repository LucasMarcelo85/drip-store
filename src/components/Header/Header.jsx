import "./Header.css";

import { Navigator } from './../Navigator/Navigator';

import logoHeader from './../../../public/svgs/logo-header.svg'
import headerlogo from "./../../../public/svgs/logo-header.svg";
import minicart from "./../../../public/svgs/mini-cart.svg";
import ellipse from "./../../../public/svgs/ellipse.svg";
import dois from "./../../../public/svgs/dois.svg";
import lupa from "./../../../public/svgs/search.svg";

export function Header() {
    return (
        <header className="header-container">
            <section>
                <img src={logoHeader} alt="logo header" />

                <label>
                    <input type="text" placeholder="Pesquisar produto" />
                </label>
            </section>

            <Navigator />
        </header>
    );
}


