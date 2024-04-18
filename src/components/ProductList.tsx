import ProductItem from './ProductItem'
import '../styling/productList.css'
import { useProductContext } from '../contexts/ProductsContext'
import { useState } from 'react'
import Product from '../interfaces/Product'
import { EditProductForm } from './forms/EditProductForm'

export default function ProductList() {
    const { products, isLoading, error } = useProductContext()
    const [productToEdit, setProductToEdit] = useState<Product | null>(null)

    function toggleEditClicked(product: Product) {
        setProductToEdit((prev) => (prev !== product ? product : null))
    }

    if (isLoading) {
        return <div>Loading...</div> // Show loading message while data is loading
    }

    if (error) {
        return <div>Error: {error}</div> // Show error message if there is an error
    }

    return (
        <>
            <div className="product-list-container">
                <table className="product-list-table">
                    <thead>
                        <tr className="table-row">
                            <th>Name</th>
                            <th>Price in DKK</th>
                            <th>Weight in grams</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <ProductItem
                                key={product.name}
                                product={product}
                                toggleEditClicked={() =>
                                    toggleEditClicked(product)
                                }
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {productToEdit && (
                <EditProductForm
                    product={productToEdit}
                    toggleEditClicked={toggleEditClicked}
                />
            )}
        </>
    )
}
