import "./FeaturedCollectionsIcons.css";
import teniss from "/svgs/teniss.svg";
import fone from "/svgs/fone.svg";
import calça from "/svgs/calça.svg";
import blusaE from "/svgs/blusaE.svg";

export function FeaturedCollectionsIcons() {
    return (
        <section>
            <div className="roupas">
                <ul>
                    <li>
                        <a href="#">
                            <img src={blusaE} alt="blusa" />
                            <br />
                            <strong>Camisetas</strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={calça} alt="calça" />
                            <br />
                            <strong>Calças</strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={calça} alt="calça" />
                            <br />
                            <strong>Bonés</strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={fone} alt="fone" />
                            <br />
                            <strong>Headphones</strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={teniss} alt="tenis" />
                            <br />
                            <strong>Tênis</strong>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
