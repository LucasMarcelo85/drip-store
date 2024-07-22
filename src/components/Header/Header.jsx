import "./Header.css";
import headerlogo from "./../../../public/svgs/logo-header.svg";
import minicart from "./../../../public/svgs/mini-cart.svg";
import ellipse from "./../../../public/svgs/ellipse.svg";
import dois from "./../../../public/svgs/dois.svg";
import lupa from "./../../../public/svgs/search.svg";
import { Navigator } from '../Navigator/Navigator';

export function Header() {
    return (
        <header>

            <div className="header">
                <div className="logo">
                    <img src={headerlogo} alt="Logo Digital Store" />
                </div>

                <div className="inputs">
                    <input type="text" placeholder="Pesquisar Produto" />
                    <img src={lupa} alt="lupa" />
                </div>

                <div className="icons">
                    <a href="">Cadastre-se</a>
                    <button>Entrar</button>

                </div>
                <div className="buy">

                    <div className="carrinho">
                        <img src={minicart} alt="carrinho" />

                        <div className="Ellipse">
                            <img src={ellipse} alt="Ellipse" />
                            <div className="dois">
                                <img src={dois} alt="2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Navigator />
        </header>
    );
}


