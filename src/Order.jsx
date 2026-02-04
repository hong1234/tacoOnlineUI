// export function Order() {
//   return <h3>Order</h3>;
// }

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
        <h3>Order-Id: {order.id}</h3>
        {/* <p className="card-text">{product.unitPrice} $</p> */}
        {/* <button onClick={handleAddItem}>add to cart</button> */}
        {/* <button onClick={() => mutate(productId)}>add to cart</button> */}
        {order.tacos.map((taco) => (
          <div key={taco.id}>
            <h4>Taco-Id: {taco.id}</h4>
            {taco.ingredients.map((ing) => (
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
