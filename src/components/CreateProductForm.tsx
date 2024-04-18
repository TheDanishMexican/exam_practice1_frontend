import React, { useState } from 'react'
import '../styling/createProductForm.css'
import Product from '../interfaces/Product'

interface CreateProductFormProps {
    toggleForm: () => void
    handleCreateProduct: (product: Product) => void
}

export default function CreateProductForm({
    toggleForm,
    handleCreateProduct,
}: CreateProductFormProps) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [weight, setWeight] = useState('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            const product: Product = {
                name: name,
                price: Number(price),
                weightInGrams: Number(weight),
            }
            handleCreateProduct(product)
            toggleForm()
            // Reset form fields after successful submission
            setName('')
            setPrice('')
            setWeight('')
        } catch (error) {
            console.error('Failed to create product:', error)
        }
    }

    return (
        <div className="create-product-form-container">
            <form className="create-product-form" onSubmit={handleSubmit}>
                <h3 className="create-product-form-header">Add new product</h3>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="price">Price in DKK:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <label htmlFor="weight">Weight in grams:</label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />
                <div className="create-form-buttons-container">
                    <button
                        className="confirm-create-product-button"
                        type="submit"
                    >
                        Confirm
                    </button>
                    <button
                        className="cancel-create-product-button"
                        onClick={toggleForm}
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}
