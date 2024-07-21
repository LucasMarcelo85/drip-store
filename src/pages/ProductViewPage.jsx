import { BuyBox } from "./../components/BuyBox/BuyBox";
import { Section } from "./../components/Section/Section";
import { ProductListening } from "./../components/ProductListing/ProductListing";
import { ProductCard } from "./../components/ProductCard/ProductCard";

export function ProductViewPage() {
    return (
        <>
            <BuyBox />

            <Section>
                <ProductListening>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductListening>
            </Section>
        </>
    );
}
