import footerLogo from "/svgs/logo-footer.svg";
import fbkLogo from "/svgs/facebook.svg";
import instaLogo from "/svgs/instagram.svg";
import ttLogo from "/svgs/twitter.svg";

import "./Footer.css";

export function Footer() {
    return (
        <footer>

<footer class="footer">
    
    <div class="footer-logo">
        
        <h2><img src={footerLogo} alt="Logo Digital Store" /></h2>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut delectus ratione distinctio asperiores totam deleniti cum fugit dolorem beatae.</p>

        <div className="redesLogo">
                                <img src={fbkLogo} alt="Logo Facebook" />
                                <img src={instaLogo} alt="Logo Instagram" />
                                <img src={ttLogo} alt="Logo Twitter" />
                            </div>
                            
    </div>
    
    <div class="footer-links">
        
        <h3>Informação</h3>
        <ul>
            <li><a href="#">Sobre Drip Store</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Meus Pedidos</a></li>
        </ul>
    </div>
    <div class="footer-links">
        <h3>Categorias</h3>
        <ul>
            <li><a href="#">Camisetas</a></li>
            <li><a href="#">Calças</a></li>
            <li><a href="#">Bonés</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Tênis</a></li>
        </ul>
    </div>
    <div class="footer-contact">
        <h3>Contato</h3>
        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
        <p>(85) 3051-3411</p>
    </div>
    
</footer>

<div className="digcoll">
                        <hr />
                        <p>@ 2022 Digital College</p>
                    </div>
                 
        
                            
                           
                          
                       
        </footer>
    );
}
