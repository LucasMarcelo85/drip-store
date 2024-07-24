import "./BuyBox.css";

import { ProductOptions } from "./../ProductOptions/ProductOptions";

import StarActive from "/svgs/star-active.svg";
import StarDesactive from "/svgs/star-desactive.svg";
import StarWhite from "/svgs/star-white.svg";

export function BuyBox() {

    return (
        <div className="buy-box-container">
            <header className="buy-box-header">
                <h1>Tenis Nike Revolution 6 Next Nature Masculino</h1>
                <h2>Casual | Nike | REF:123</h2>
                <section>
                    <span>
                        <img src={StarActive} />
                        <img src={StarActive} />
                        <img src={StarActive} />
                        <img src={StarActive} />
                        <img src={StarDesactive} />
                    </span>

                    <span>
                        <p>4.7</p>
                        <img src={StarWhite} />
                    </span>

                    <span>(90 avaliações)</span>
                </section>
            </header>

            <main className="buy-box-main">
                <p>
                    <span>
                        <div>R$</div>219,00
                    </span>
                    <span>219,00</span>
                </p>

                <h3>Descrição do produto</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non, quibusdam?
                </p>
            </main>

            <footer className="buy-box-footer">
                <ProductOptions />
                <button>Comprar</button>
            </footer>
        </div>
    );
}
