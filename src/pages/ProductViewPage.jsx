import { BuyBox } from "./../components/BuyBox/BuyBox";
import { Section } from "./../components/Section/Section";
import { ProductListening } from "./../components/ProductListing/ProductListing";
import { ProductCard } from "./../components/ProductCard/ProductCard";
import { Layout } from "../components/Layout/Layout";
import { PageViewCarousel } from './../components/PageViewCarousel/PageViewCarousel';

export function ProductViewPage() {
    return (
        <Layout>

            <Section>
                <PageViewCarousel />
                <BuyBox />
            </Section>

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
