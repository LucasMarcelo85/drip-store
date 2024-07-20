import { Section } from "../Section/Section";
import "./ProductListing.css";
import { ProductCard } from "./../ProductCard/ProductCard";

export function ProductListening() {
    return (
        <Section title={"Produtos em alta"}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Section>
    );
}
