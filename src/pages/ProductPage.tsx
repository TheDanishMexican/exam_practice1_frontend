import { useState } from 'react'
import CreateProductForm from '../components/CreateProductForm'
import ProductList from '../components/ProductList'
import '../styling/productPage.css'
import { createProduct } from '../services/apiFacade'
import Product from '../interfaces/Product'

export default function ProductPage() {
    const [showForm, setShowForm] = useState(false)
    const [productCreated, setProductCreated] = useState(false)

    function toggleForm() {
        setShowForm(!showForm)
    }

    function handleCreateProduct(product: Product) {
        createProduct(product)
        setProductCreated(!productCreated)
    }

    return (
        <>
            <div className="product-page-container">
                <h1 className="product-page-header">Product page</h1>
                <ProductList productCreated={productCreated} />
                <div className="add-product-button-container">
                    <button className="add-product-button" onClick={toggleForm}>
                        Add new product
                    </button>
                </div>
                {showForm && (
                    <CreateProductForm
                        handleCreateProduct={handleCreateProduct}
                        toggleForm={toggleForm}
                    />
                )}
            </div>
        </>
    )
}
