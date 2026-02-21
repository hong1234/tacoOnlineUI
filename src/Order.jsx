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

  return (
    <div className="">
      {/* <img
        className="col-12 col-sm-4 col-md-4" 
        src={product.image}
        alt="photo"
      /> */}
      {/* <p className="card-text">{product.unitPrice} $</p> */}
      {/* <button onClick={handleAddItem}>add to cart</button> */}
      {/* <button onClick={() => mutate(productId)}>add to cart</button> */}

      {order.id > 0 ? (
        <div className="">
          <h1 className="font-heading text-2xl font-bold">Thank for your Order</h1>
          ordered at: {order.placedAt} <br />
          <strong className="font-bold">OrderID:</strong> {order.uuid}
          {/* OrderID: <strong>{order.uuid.substring(order.uuid.length - 12)}</strong> */}
          <br />
          <br />
          <p className="font-bold">Kunde: {order.deliveryName}</p>
          Adresse: {order.deliveryStreet} - {order.deliveryCity} <br />
          Tel-Nummer: {order.ccNumber} <br />
          <br />
          <p className="font-bold">Total-Price: {order.totalPrice} $</p>
          Items-Price: {order.itemsPrice} $<br />
          Shipment-Price: {order.shipmentPrice} $<br />
          <br />
          {order.items.map((item) => (
            <div key={item.id}>
              BanhMy-ID: {item.id} <br />
              Quantity: {item.qty} <br />
              UnitPrice: {item.unitPrice} $<br />
              SumPrice: {item.sumPrice} $<br />
              Ingredients:
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
      ) : (
        <h2>THE ORDER ( ID={order.uuid} ) IS NOT FOUND</h2>
      )}
    </div>
  );
};

export default Order;
