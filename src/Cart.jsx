// import { useParams } from "react-router";
// import { useContext } from "react";
// import { AppContext } from "./AppContext";
import { useNavigate } from "react-router";
import { getCartUuid } from "./api/getCartUuid";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "./api/getCart";

const Cart = () => {
  const navigate = useNavigate();
  // const { state } = useContext(AppContext);
  // const { cartId } = useParams();

  const checkout = (e) => {
    e.preventDefault();
    // refetch();
    navigate("/order");
  };

  const {
    isLoading,
    // isError,
    data: cart,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(getCartUuid()),
  });

  if (isLoading || cart === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  // if (isLoading) {
  //   // return <div className="">Loading ...</div>;
  //   return null;
  // }

  // if (isError) {
  //   navigate("/");
  //   // return <div className="">ERROR</div>;
  // }

  return cart == null ? null : (
    <div className="row">
      {/* <img
        className="col-12 col-sm-4 col-md-4"
        src={product.image}
        alt="photo"
      /> */}
      <div className="col-12 col-sm-8 col-md-8">
        {/* <div className="bg-primary text-white text-center p-1" /> */}
        {/* <p className="card-title fw-bold">{taco.id}</p> */}
        <h3>
          Cart Id={cart.id} | uuId={cart.uuid}
        </h3>
        {/* <button onClick={handleAddItem}>add to cart</button> */}
        {/* <button onClick={() => mutate(productId)}>add to cart</button> */}
        {cart.tacos.map((taco) => (
          <div key={taco.id}>
            <h4>Taco-Id: {taco.id}</h4>
            Qty: {taco.qty} <br />
            UnitPrice: {taco.unitPrice} $ <br />
            Ingredients:
            {taco.ingredients
              .sort((a, b) => a.id - b.id)
              .map((ing) => (
                <div key={ing.id}>
                  - {ing.name} - {ing.ingredientType} <br />
                </div>
              ))}
          </div>
        ))}
      </div>
      <br />
      {cart.tacos.length > 0 ? (
        <button type="button" className="btn btn-secondary" onClick={checkout}>
          Checkout
        </button>
      ) : null}
    </div>
  );
};

export default Cart;
