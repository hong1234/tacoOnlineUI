// import { useContext } from "react";
// import { AppContext } from "./AppContext";
// import { useParams } from "react-router";
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { getCartUuid } from './api/cartUuid';
import { useQuery } from '@tanstack/react-query';
import { getCart } from './api/getCart';
import AddButton from './AddButton';

const Cart = () => {
  const navigate = useNavigate();
  // const { state } = useContext(AppContext);
  // const { cartId } = useParams();

  const checkout = (e) => {
    e.preventDefault();
    // refetch();
    navigate('/order');
  };

  const {
    isLoading,
    // isError,
    data: cart,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCart(getCartUuid()),
  });

  if (isLoading || cart === undefined) {
    return <div className="mx-auto mt-6 w-96">Loading ...</div>;
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
    <div className="">
      {/* <img
        className="col-12 col-sm-4 col-md-4" 
        src={product.image}
        alt="photo"
      /> */}
      {/* <button onClick={handleAddItem}>add to cart</button> */}
      {/* <button onClick={() => mutate(productId)}>add to cart</button> */}
      <div className="">
        <h1 className="font-heading text-2xl font-bold">Cart</h1>
        {/* Cart-ID={cart.id} | uuID={cart.uuid} */}
        CartID: {cart.uuid}
        <br />
        <br />
        {
          cart.tacos.length > 0 ? (
            <div>
              <div className="grid gap-4 md:grid-cols-3">
                {cart.tacos.map((taco) => (
                  <div key={taco.id} className="relative rounded-md border p-2">
                    BanhMy-ID: {taco.id} <br />
                    Quantity: {taco.qty} <AddButton tacoID={taco.id} />
                    <br />
                    UnitPrice: {taco.unitPrice} $<br />
                    Ingredients:
                    {taco.ingredients
                      .sort((a, b) => a.id - b.id)
                      .map((ing) => (
                        <div key={ing.id} className="flex items-center text-sm">
                          <svg
                            className="mr-3 h-4 w-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {ing.name} - {ing.ingredientType} <br />
                        </div>
                      ))}
                  </div>
                ))}
              </div>
              <br />
              <Link to="/taco">
                <p className="md-4 font-bold text-gray-600 underline">make one more</p>
              </Link>
              <br />
              <button
                type="button"
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                onClick={checkout}
              >
                Checkout
              </button>
            </div>
          ) : (
            <Link to="/taco">
              <button
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                type="button"
              >
                make your first BanhMy
              </button>
            </Link>
          )
          // null
        }
      </div>
    </div>
  );
};

export default Cart;
