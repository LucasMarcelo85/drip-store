import { Section } from "../components/Section/Section";
import { ProductListening } from "../components/ProductListing/ProductListing";
import { ProductCard } from "../components/ProductCard/ProductCard";

export function ProductListeningPage() {
    return (
        <main>
            <Section>
                <ProductListening>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductListening>
            </Section>
        </main>
    );
}
