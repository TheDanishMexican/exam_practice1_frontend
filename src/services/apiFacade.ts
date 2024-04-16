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

    await fetch(`${API_URL}/products/${id}`, options)
}
