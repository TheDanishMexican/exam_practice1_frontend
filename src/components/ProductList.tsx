import ProductItem from './ProductItem'
import '../styling/productList.css'
import { useProductContext } from '../contexts/ProductsContext'

export default function ProductList() {
    const { products, isLoading, error, deleteProduct } = useProductContext()

    async function handleDeleteProduct(id: number) {
        await deleteProduct(id)
    }

    if (isLoading) {
        return <div>Loading...</div> // Show loading message while data is loading
    }

    if (error) {
        return <div>Error: {error}</div> // Show error message if there is an error
    }

    return (
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
                            handleDeleteProduct={handleDeleteProduct}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
