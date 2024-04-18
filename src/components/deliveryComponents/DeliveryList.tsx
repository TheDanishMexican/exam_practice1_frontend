import DeliveryItem from './DeliveryItem'
import '../../styling/deliveryList.css'
import { Delivery } from '../../interfaces/Delivery'
import { useDeliveriesContext } from '../../contexts/DeliveriesContext'

export default function DeliveryList() {
    const { deliveries, isLoading, error } = useDeliveriesContext()

    if (isLoading) {
        return <div>Loading...</div> // Show loading message while data is loading
    }

    if (error) {
        return <div>Error: {error}</div> // Show error message if there is an error
    }

    return (
        <>
            <div className="delivery-list-container">
                <table className="delivery-list-table">
                    <thead>
                        <tr className="table-row-delivery">
                            <th>Date</th>
                            <th>Warehouse</th>
                            <th>Destination</th>
                            <th>ID</th>
                            <th>Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deliveries.map((delivery: Delivery) => (
                            <DeliveryItem
                                key={delivery.id}
                                delivery={delivery}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
