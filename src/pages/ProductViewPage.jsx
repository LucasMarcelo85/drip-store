import { BuyBox } from "./../components/BuyBox/BuyBox";
import { Section } from "./../components/Section/Section";
import { ProductListening } from "./../components/ProductListing/ProductListing";
import { ProductCard } from "./../components/ProductCard/ProductCard";
import { Layout } from "../components/Layout/Layout";

export function ProductViewPage() {
    return (
        <Layout>
            <BuyBox />

            <Section title="Produtos Relacionados">
                <ProductListening>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductListening>
            </Section>
        </Layout>
    );
}
