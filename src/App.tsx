import { Route, Routes, Navigate } from 'react-router-dom'
import ProductPage from './pages/ProductPage'

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProductPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}
