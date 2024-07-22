import "./ProductCard.css";

import { useNavigate } from "react-router-dom";

import ProductCardImage from "/IMG/product-images/produc-image-1.jpeg";


export function ProductCard() {

    const navigate = useNavigate()

    const handleClick = () => navigate('/produto');

    return (
        <div className="product-card-container" onClick={handleClick}>
            <figure className="figure-container">
                <span className="product-discont"> 30% OFF </span>
                <img
                    className="product-image"
                    src={ProductCardImage}
                    alt="imagem produto"
                />
            </figure>

            <section className="product-container-informations">
                <h2>Tênis</h2>

                <h1>K-Swiss V8 - Masculino</h1>

                <p className="product-container-informations-paragraph">
                    <span>$200</span>
                    <span>$100</span>
                </p>
            </section>
        </div>
    );
}
