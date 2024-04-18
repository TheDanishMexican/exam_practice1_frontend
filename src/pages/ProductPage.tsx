import { useState } from 'react'
import CreateProductForm from '../components/CreateProductForm'
import ProductList from '../components/ProductList'
import '../styling/productPage.css'

export default function ProductPage() {
    const [showForm, setShowForm] = useState(false)

    function toggleForm() {
        setShowForm(!showForm)
    }

    return (
        <>
            <div className="product-page-container">
                <h1 className="product-page-header">Product page</h1>
                <ProductList />
                <div className="add-product-button-container">
                    <button className="add-product-button" onClick={toggleForm}>
                        Add new product
                    </button>
                </div>
                {showForm && <CreateProductForm toggleForm={toggleForm} />}
            </div>
        </>
    )
}
