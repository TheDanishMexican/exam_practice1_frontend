import { useState } from 'react'
import '../../styling/editProductForm.css'
import { EditProductFormProps } from '../../interfaces/EditProductFormProps'

export function EditProductForm({
    product,
    toggleEditClicked,
}: EditProductFormProps) {
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [weight, setWeight] = useState(product.weightInGrams)

    return (
        <>
            <div className="edit-product-form-container">
                <form className="edit-product-form">
                    <h3 className="edit-product-form-header">Edit product</h3>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="price">Price in DKK:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                    <label htmlFor="weight">Weight in grams:</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                    />
                    <div className="edit-form-buttons-container">
                        <button
                            className="confirm-edit-product-button"
                            type="submit"
                        >
                            Confirm
                        </button>
                        <button
                            className="cancel-edit-product-button"
                            type="button"
                            onClick={() => toggleEditClicked(product)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
