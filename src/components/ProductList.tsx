import { useEffect, useState } from 'react'
import { deleteProduct, getProducts } from '../services/apiFacade'
import Product from '../interfaces/Product'
import ProductItem from './ProductItem'
import '../styling/productList.css'

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null) // Initializing error state as null

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true) // Start loading
                setError(null) // Clear previous errors
                const fetchedProducts = await getProducts() // Fetch products
                setProducts(fetchedProducts) // Set products on successful fetch
            } catch (err) {
                setError('Failed to fetch products') // Set error message on catch
                console.error(err) // Also log the error to the console
            } finally {
                setLoading(false) // End loading whether or not there was an error
            }
        }
        fetchData()
    }, [])

    function handleDeleteProduct(id: number) {
        deleteProduct(id)
    }

    if (isLoading) {
        return <div>Loading...</div> // Show loading message while data is loading
    }

    if (error) {
        return <div>Error: {error}</div> // Show error message if there is an error
    }

    console.log(products)

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
                                key={product.id}
                                product={product}
                                handleDeleteProduct={handleDeleteProduct}
                            />
                        ))}
                    </tbody>
                </table>
                <div className="add-product-button-container">
                    <button className="add-product-button">
                        Add new product
                    </button>
                </div>
            </div>
        </>
    )
}
