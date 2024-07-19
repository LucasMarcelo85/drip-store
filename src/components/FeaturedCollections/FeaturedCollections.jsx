import "./FeaturedCollections.css";
import { Section } from "./../Section/Section";

export function FeaturedCollections() {
    return (
        <Section>
            <div className="featured-collection-header-container">
                <h1>Coleções em destaque</h1>
            </div>
            <figure className="collection-featured-figure-container">
                <span>30% OFF</span>
                <button>Comprar</button>
                <img src="./../../../public/IMG/collection-images/collection-1.png" />
            </figure>

            <figure className="collection-featured-figure-container">
                <span>30% OFF</span>
                <button>Comprar</button>
                <img src="./../../../public/IMG/collection-images/collection-2.png" />
            </figure>

            <figure className="collection-featured-figure-container">
                <span>30% OFF</span>
                <button>Comprar</button>
                <img src="./../../../public/IMG/collection-images/collection-3.png" />
            </figure>
        </Section>
    );
}
