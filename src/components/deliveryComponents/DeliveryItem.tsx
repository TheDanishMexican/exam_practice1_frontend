import { Delivery } from '../../interfaces/Delivery'

export default function DeliveryItem({ delivery }: { delivery: Delivery }) {
    return (
        <>
            <tr className="table-row-delivery">
                <td>{delivery.deliveryDate.toString()}</td>
                <td>{delivery.destination}</td>
                <td>{delivery.fromWarehouse}</td>
                <td>{delivery.id}</td>
                <td>
                    <button className="table-button-delivery">
                        See details
                    </button>
                </td>
            </tr>
        </>
    )
}
