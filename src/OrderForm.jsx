import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getCartUuid, refreshCartUuid } from './api/cartUuid';
import { saveOrder } from './api/saveOrder';
import {
  // useQuery
  useMutation,
  // useQueryClient,
} from '@tanstack/react-query';

// import "./styles.css";

export default function OrderForm() {
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
      // console.log(getCartUuid());

      navigate('/order/' + resdata.uuid);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
    // console.log(inputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    if (
      inputs?.deliveryName !== undefined &&
      inputs?.deliveryStreet !== undefined &&
      inputs?.deliveryCity !== undefined &&
      inputs?.ccNumber !== undefined
    ) {
      mutate(inputs);
    }
    // else {
    //   alert('please full fill the form!');
    // }
  };

  return (
    <>
      <h1 className="font-heading text-2xl font-bold">Order your BanhMy creations!</h1>
      <img className="h-40 w-60 object-contain" src="/images/TacoCloud.png" />
      <p className="mb-4 text-base text-gray-600">
        Deliver my BanhMy masterpieces to...
        <br />
        Please full fill the form!
      </p>
      <form onSubmit={handleSubmit}>
        {/* <input type="hidden" id="uuid" name="uuid" value="xxxxxx"></input> */}
        <label htmlFor="deliveryName">
          Name: <br />
          <input
            className="block w-80 appearance-none rounded border border-red-500 bg-gray-200 px-2 py-2 leading-tight"
            type="text"
            name="deliveryName"
            value={inputs.deliveryName || ''}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="deliveryStreet">
          Street House-Nr: <br />
          <input
            className="block w-80 appearance-none rounded border border-red-500 bg-gray-200 px-2 py-2 leading-tight"
            type="text"
            name="deliveryStreet"
            value={inputs.deliveryStreet || ''}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="deliveryCity">
          PLZ City: <br />
          <input
            className="block w-80 appearance-none rounded border border-red-500 bg-gray-200 px-2 py-2 leading-tight"
            type="text"
            name="deliveryCity"
            value={inputs.deliveryCity || ''}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="ccNumber">
          Tel-Nummer:
          <input
            className="block w-80 appearance-none rounded border border-red-500 bg-gray-200 px-2 py-2 leading-tight"
            type="text"
            name="ccNumber"
            value={inputs.ccNumber || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
