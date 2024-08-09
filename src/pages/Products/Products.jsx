import { Section } from "../../components/Section/Section";
import { ProductListening } from "../../components/ProductListing/ProductListing";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Layout } from "../../components/Layout/Layout";
import { FilterGroup } from "../../components/FilterGroup/FilterGroup";
import { SearchProduct } from "../../components/SearchProduct/SearchProduct";

import "./Products.css";

export function Products() {
    const produtos = [
        {
            name: "Nome do produto",
            image: "/IMG/product-images/produc-image-1.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },

        {
            name: "Nome do produto",
            image: "/IMG/product-images/produc-image-2.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },

        {
            name: "Nome do produto",
            image: "/IMG/product-images/produc-image-3.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },

        {
            name: "Nome do produto",
            image: "/IMG/product-images/produc-image-4.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },

        {
            name: "Nome do produto",
            image: "/IMG/product-images/produc-image-5.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },

        {
            name: "Nome do produto",
            image: "/IMG/product-images/produc-image-1.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },

        {
            name: "Nome do produto",
            image: "/IMG/product-images/produc-image-2.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },

        {
            name: "Nome do produto",
            image: "/IMG/product-images/produc-image-3.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },
    ];
    return (
        <Layout>

            <h2 className="results-title"> <span>Resultados para “Tênis” -</span> 389 produtos</h2>
            <div className="products-container">
                <section className="filter-order-container">
                    <SearchProduct />
                    <FilterGroup />
                </section>

                <Section>
                    <ProductListening>
                        {produtos.map((produto, key) => (
                            <ProductCard key={key} produto={produto} />
                        ))}
                    </ProductListening>
                </Section>
            </div>
        </Layout>
    );
}
