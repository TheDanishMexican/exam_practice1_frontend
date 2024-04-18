import { API_URL } from '../settings'
import Product from '../interfaces/Product'
import { handleHttpErrors, makeOptions } from './fetchUtils'

export async function getProducts(): Promise<Product[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/products`, options)
    const data = await handleHttpErrors(response)

    return data
}

export async function deleteProduct(id: number): Promise<void> {
    const options = makeOptions('DELETE', null)
    const response = await fetch(`${API_URL}/products/${id}`, options)

    if (response.status == 409) {
        throw new Error('Cannot delete product with active orders')
    } else
        console.log(
            `Deleted product ID: ${id}`,
            await handleHttpErrors(response)
        )
}

export async function createProduct(product: Product) {
    const options = makeOptions('POST', product)
    const response = await fetch(`${API_URL}/products`, options)

    if (response.status == 400) {
        throw new Error('Invalid product data, name already exists/ID provided')
    } else {
        console.log('Created product:', await handleHttpErrors(response))
    }
}
