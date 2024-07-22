import "./Header.css";

import { Navigator } from './../Navigator/Navigator';

import logoHeader from './../../../public/svgs/logo-header.svg'


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


