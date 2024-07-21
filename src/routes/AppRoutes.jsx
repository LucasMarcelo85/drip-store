import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { ProductListeningPage } from "../pages/productListingPage";
import { ProductViewPage } from "../pages/ProductViewPage";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductListeningPage />} />
                <Route path="/product" element={<ProductViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}
