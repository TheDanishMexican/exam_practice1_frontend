import { Route, Routes, Navigate } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import { ProductProvider } from './contexts/ProductsContext'
// Import the ProductProvider

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProductProvider>
                        <ProductPage />
                    </ProductProvider>
                }
            />
            <Route
                path="/products"
                element={
                    <ProductProvider>
                        <ProductPage />
                    </ProductProvider>
                }
            />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
