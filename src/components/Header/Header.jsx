import "./Header.css";
import headerlogo from "./../../../public/svgs/logo-header.svg";
import minicart from "./../../../public/svgs/mini-cart.svg";
import Ellipse from "./../../../public/svgs/Ellipse 12.svg";
import dois from "./../../../public/svgs/dois.svg";
import lupa from "./../../../public/svgs/Search.svg";

export function Header() {
    return (
        <header>

            <div className="header">
                <div className="logo">
                    <img src={headerlogo} alt="Logo Digital Store" />
                </div>

                <div class="inputs">
                    <input type="text" placeholder="Pesquisar Produto" />
                    <img src={lupa} alt="lupa" />
                </div>

                <div class="icons">
                    <a href="">Cadastre-se</a>
                    <button>Entrar</button>

                </div>
                <div className="buy">

                    <div className="carrinho">
                        <img src={minicart} alt="carrinho" />




                        <div className="Ellipse">
                            <img src={Ellipse} alt="Ellipse" />


                            <div className="dois">
                                <img src={dois} alt="2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <nav className="nav">
                <div className="navbar">
                    <td className="home">
                        <tr><a href="#">Home</a></tr>
                        <tr><a href="#">Produtos</a></tr>
                        <tr><a href="#">Categorias</a></tr>
                        <tr id="nomes"><a href="#">Meus Pedidos</a></tr>
                    </td>


                </div>
            </nav>

            </header>
    );
}


