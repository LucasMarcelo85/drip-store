import { Section } from "./../components/Section/Section";
import { ProductListening } from "./../components/ProductListing/ProductListing";
import { ProductCard } from "./../components/ProductCard/ProductCard";
import { Layout } from "../components/Layout/Layout";
import { ProductDetails } from './../components/ProductDetails/ProductDetails';

export function ProductViewPage() {

    const produtos = [
        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-1.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-2.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-3.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-4.jpeg",
            price: 200,
            priceDiscount: 149.9
        },
    ]

    return (
        <Layout>

            <Section>
                <ProductDetails/>
            </Section>

            <Section title="Produtos Relacionados">
                <ProductListening>
                    {produtos.map((produto, key) => <ProductCard key={key} produto={produto} />)}
                </ProductListening>
            </Section>
        </Layout>
    );
}
