import ProductList from '../components/ProductList'
import '../styling/productPage.css'

export default function ProductPage() {
    return (
        <>
            <div className="product-page-container">
                <h1 className="product-page-header">Product page</h1>
                <ProductList />
            </div>
        </>
    )
}
