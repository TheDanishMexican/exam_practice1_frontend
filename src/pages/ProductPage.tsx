import { useState } from 'react'
import CreateProductForm from '../components/forms/CreateProductForm'
import ProductList from '../components/ProductList'
import '../styling/productPage.css'

export default function ProductPage() {
    const [showCreateForm, setShowCreateForm] = useState(false)

    function toggleCreateForm() {
        setShowCreateForm((prev) => !prev)
    }

    return (
        <>
            <div className="product-page-container">
                <h1 className="product-page-header">Product page</h1>
                <ProductList />
                <div className="add-product-button-container">
                    <button
                        className="add-product-button"
                        onClick={toggleCreateForm}
                    >
                        Add new product
                    </button>
                </div>
                {showCreateForm && (
                    <CreateProductForm toggleCreateForm={toggleCreateForm} />
                )}
            </div>
        </>
    )
}
