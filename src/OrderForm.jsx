import { useState } from "react";
import { useNavigate } from "react-router";
import { getCartUuid, refreshCartUuid } from "./api/getCartUuid";
import { saveOrder } from "./api/saveOrder";
import {
  // useQuery
  useMutation,
  // useQueryClient,
} from "@tanstack/react-query";

import "./styles.css";

export function OrderForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    uuid: getCartUuid(),
  });

  const { mutate } = useMutation({
    mutationFn: saveOrder,
    onSuccess: (resdata) => {
      console.log(resdata);
      // queryClient.invalidateQueries(["products"]);
      // setInputs({}); // clear form
      refreshCartUuid();
      console.log(getCartUuid());

      navigate("/order/" + resdata.uuid);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
    // console.log(inputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    mutate(inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Order your BanhMy creations!</h1>
        <img src="/images/TacoCloud.png" />
        <h3>Deliver my BanhMy masterpieces to...</h3>
        {/* <input type="hidden" id="uuid" name="uuid" value="xxxxxx"></input> */}

        <label htmlFor="deliveryName">
          Name: <br />
          <input
            type="text"
            name="deliveryName"
            value={inputs.deliveryName || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="deliveryStreet">
          Street address: <br />
          <input
            type="text"
            name="deliveryStreet"
            value={inputs.deliveryStreet || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="deliveryCity">
          PLZ City: <br />
          <input
            type="text"
            name="deliveryCity"
            value={inputs.deliveryCity || ""}
            onChange={handleChange}
          />
        </label>

        <h3>Here's how I'll pay...</h3>
        <label htmlFor="ccNumber">
          Credit Card #:
          <br />
          <input
            type="text"
            name="ccNumber"
            value={inputs.ccNumber || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
