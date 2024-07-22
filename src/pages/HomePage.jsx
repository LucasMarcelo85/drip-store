import { Section } from "../components/Section/Section";
import { ProductListening } from "./../components/ProductListing/ProductListing";
import { ProductCard } from "./../components/ProductCard/ProductCard";
import { FeaturedCollections } from "./../components/FeaturedCollections/FeaturedCollections";
import { Layout } from './../components/Layout/Layout';

export function HomePage() {
    return (
        <Layout>

            <Section title="Coleção em destaque">
                <FeaturedCollections />
            </Section>

            <Section title="Produtos em alta">
                <ProductListening>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductListening>
            </Section>
        </Layout>
    );
}
