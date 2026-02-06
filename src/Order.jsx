import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getOrder } from "./api/getOrder";

const Order = () => {
  const { orderId } = useParams();
  const { isLoading, data: order } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrder(orderId),
  });

  if (isLoading || order === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  return order == null ? null : (
    <div className="row">
      {/* <img
        className="col-12 col-sm-4 col-md-4"
        src={product.image}
        alt="photo"
      /> */}
      <div className="col-12 col-sm-8 col-md-8">
        {/* <div className="bg-primary text-white text-center p-1" /> */}
        {/* <p className="card-title fw-bold">{taco.id}</p> */}
        {/* <h3>Order-Id: {order.id}</h3> */}
        <h3>OrderId: {order.uuid}</h3>
        Kunde: {order.deliveryName} <br />
        Adresse: {order.deliveryStreet} - {order.deliveryCity} <br />
        Ordered at: {order.placedAt} <br />
        Items-Price: {order.itemsPrice} <br />
        Shipment-Price: {order.shipmentPrice} <br />
        Total-Price: {order.totalPrice} <br />
        {/* <p className="card-text">{product.unitPrice} $</p> */}
        {/* <button onClick={handleAddItem}>add to cart</button> */}
        {/* <button onClick={() => mutate(productId)}>add to cart</button> */}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
