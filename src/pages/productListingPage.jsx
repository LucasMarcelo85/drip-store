import { Section } from "../components/Section/Section";
import { ProductListening } from "../components/ProductListing/ProductListing";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Layout } from './../components/Layout/Layout';

export function ProductListeningPage() {
    return (
        <Layout>
            <Section>
                <ProductListening>
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
