import { Section } from "../Section/Section";
import "./ProductListing.css";
import { ProductCard } from "./../ProductCard/ProductCard";

export function ProductListening() {
    return (
        <Section>
            <div className="product-listing-header-container">
                <h1>Produtos em alta</h1>
                <a href="#"> Ver todos </a>
            </div>

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Section>
    );
}
