import Product from '../interfaces/Product'

interface ProductItemProps {
    product: Product
    handleDeleteProduct: (id: number) => void
}

export default function ProductItem({
    product,
    handleDeleteProduct,
}: ProductItemProps) {
    function handleDeleteClick() {
        handleDeleteProduct(product.id)
    }

    return (
        <>
            <tr className="table-row" key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.weightInGrams}</td>
                <td>
                    <button
                        className="table-button"
                        onClick={handleDeleteClick}
                    >
                        Delete
                    </button>
                </td>
                <td>
                    <button className="table-button">Edit</button>
                </td>
            </tr>
        </>
    )
}
