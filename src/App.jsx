import "./../public/styles/default.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ProductOptions } from "./components/ProductOptions/ProductOptions";

export function App() {
    return (
        <>
            <Header />
            <ProductOptions />
            <Footer />
        </>
    );
}
