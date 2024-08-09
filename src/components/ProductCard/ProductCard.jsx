import "./ProductCard.css";

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


export function ProductCard({ produto }) {

    const navigate = useNavigate()

    const handleClick = () => navigate('/produto');

    return (
        <div className="product-card-container" onClick={handleClick}>
            <figure className="figure-container">
                <span className="product-discont"> 30% OFF </span>
                <img
                    className="product-image"
                    src={produto.image}
                    alt="imagem produto"
                />
            </figure>

            <section className="product-container-informations">
                <h2>{produto.name}</h2>

                <h1>K-Swiss V8 - Masculino</h1>

                <p className="product-container-informations-paragraph">
                    <span>${produto.price}</span>
                    <span>${produto.priceDiscount}</span>
                </p>
            </section>
        </div>
    );
}

ProductCard.propTypes = {
    produto: PropTypes.object
};

