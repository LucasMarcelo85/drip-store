
import  footerLogo from "./../../../public/svgs/logo-footer.svg";
import fbkLogo from "./../../../public/svgs/facebook.svg";
import instaLogo from "./../../../public/svgs/instagram.svg";
import ttLogo from "./../../../public/svgs/twitter.svg";

import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">

            <div className="container-logo">

                <div className="logo">

                    <img src= {footerLogo} alt="Logo Digital Store" />

                    <p className="texto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio mollitia temporibus modi est qui distinctio!
                    </p>

                    <div className="redesLogo">
                        <img src= {fbkLogo} alt="Logo Facebook" />
                        <img src= {instaLogo} alt="Logo Instagram" />
                        <img src= {ttLogo} alt="Logo Twitter" />
                    </div>

                </div>

            </div>

            <div className="container-infos">
                <ul className="listaInfos1">
                    <li className="topicos1">Informação</li>
                    <li>Sobre Drip Store</li>
                    <li>Segurança</li>
                    <li>Wishlist</li>
                    <li>Blog</li>
                    <li>Trabalhe conosco</li>
                    <li>Meus Pedidos</li>
                </ul>

                <ul  className="listaInfos2">
                    <li className="topicos2">Categorias</li>
                    <li>Camisetas</li>
                    <li>Calças</li>
                    <li>Bonés</li>
                    <li>Headphones</li>
                    <li>Tênis</li>
                </ul>

                <ul className="listaInfos3">
                    <li className="topicos3">Contato</li>
                    <li>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
                    <li>(85) 3051-3411</li>
                </ul>
            </div>
        </footer>
        
    );
}