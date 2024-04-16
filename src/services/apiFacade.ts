import { API_URL } from '../settings'
import Product from '../interfaces/Product'
import { handleHttpErrors, makeOptions } from './fetchUtils'

export async function getProducts(): Promise<Product[]> {
    const options = makeOptions('GET', null, undefined)

    const response = await fetch(`${API_URL}/products`, options)
    const data = await handleHttpErrors(response)

    return data
}
