import { useEffect, useState } from 'react'
import { getProducts } from '../services/apiFacade'
import Product from '../interfaces/Product'
import '../styling/productList.css'

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        async function getData() {
            const products = await getProducts()
            setProducts(products)
        }
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(products)

    return (
        <>
            <h1>This is the product list</h1>
            <div className="product-list-container">
                <table className="product-list-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price in DKK</th>
                            <th>Weight in grams</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.weightInGrams}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                                <td>
                                    <button>Edit</button>
                                </td>
                            </tr>
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
