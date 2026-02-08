import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getOrder } from './api/getOrder';

const Order = () => {
  const { orderId } = useParams();
  const { isLoading, data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrder(orderId),
  });

  if (isLoading || order === undefined) {
    return <div className="mx-auto mt-6 w-96">Loading ...</div>;
  }

  return order == null ? null : (
    <div className="">
      {/* <img
        className="col-12 col-sm-4 col-md-4"
        src={product.image}
        alt="photo"
      /> */}
      {/* <p className="card-text">{product.unitPrice} $</p> */}
      {/* <button onClick={handleAddItem}>add to cart</button> */}
      {/* <button onClick={() => mutate(productId)}>add to cart</button> */}
      <div className="">
        {/* <h3>Order-Id: {order.id}</h3> */}
        <h1 className="font-heading text-2xl font-bold">Thank for your Order</h1>
        <p className="mb-4 text-base text-gray-600">Order-ID: {order.uuid}</p>
        <br />
        <p className="font-bold">Kunde: {order.deliveryName}</p>
        Adresse: {order.deliveryStreet} - {order.deliveryCity} <br />
        Ordered at: {order.placedAt} <br />
        <br />
        <p className="font-bold">Total-Price: {order.totalPrice}</p>
        Items-Price: {order.itemsPrice} <br />
        Shipment-Price: {order.shipmentPrice} <br />
        <br />
        {order.items.map((item) => (
          <div key={item.id}>
            <h4>Item-Id: {item.id}</h4>
            {item.ingredients
              .sort((a, b) => a.id - b.id)
              .map((ing) => (
                <div key={ing.id}>
                  {ing.name} - {ing.ingredientType} <br />
                </div>
              ))}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
