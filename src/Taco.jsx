import { useState } from 'react';
// import { useNavigate } from "react-router";
// import { getIngredients } from "./api/getIngredients";
import { getCartUuid } from './api/cartUuid';
import { saveTaco } from './api/saveTaco';
import {
  // useQuery
  useMutation,
  // useQueryClient,
} from '@tanstack/react-query';
// import { useContext } from "react";
// import { AppContext } from "./AppContext";

// import './styles.css';

export default function Taco() {
  // const { state } = useContext(AppContext);
  // const navigate = useNavigate();
  // const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState({
    // uuid: state.uuid,
    uuid: getCartUuid(),
    name: 'My Taco',
    ingredients: [],
    qty: 1,
  });

  const { mutate } = useMutation({
    mutationFn: saveTaco,
    onSuccess: (resdata) => {
      console.log(resdata);
      // queryClient.invalidateQueries(["products"]);
      // clear form
      setInputs({});
      setData({
        uuid: getCartUuid(),
        name: 'My Taco',
        ingredients: [],
        qty: 1,
      });
      // go to taco detail
      // navigate("/taco/" + resdata.id);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  // const { isLoading, data: ingredients } = useQuery({
  //   queryKey: ["ingredients"],
  //   queryFn: getIngredients,
  // });

  // if (isLoading || ingredients === undefined) {
  //   return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  // }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.FLTO) {
      // setData((data) => ({ ...data, ingredients: data.ingredients.push(1) }));
      setData({ ...data, ingredients: data.ingredients.push(1) });
    }
    if (inputs.COTO) {
      setData({ ...data, ingredients: data.ingredients.push(2) });
    }
    if (inputs.GRBF) {
      setData({ ...data, ingredients: data.ingredients.push(3) });
    }
    if (inputs.CARN) {
      setData({ ...data, ingredients: data.ingredients.push(4) });
    }
    if (inputs.TMTO) {
      setData({ ...data, ingredients: data.ingredients.push(5) });
    }
    if (inputs.LETC) {
      setData({ ...data, ingredients: data.ingredients.push(6) });
    }
    if (inputs.CHED) {
      setData({ ...data, ingredients: data.ingredients.push(7) });
    }
    if (inputs.JACK) {
      setData({ ...data, ingredients: data.ingredients.push(8) });
    }
    if (inputs.SLSA) {
      setData({ ...data, ingredients: data.ingredients.push(9) });
    }
    if (inputs.SRCR) {
      setData({ ...data, ingredients: data.ingredients.push(10) });
    }

    // console.log(data);
    if (data.ingredients.length > 0) {
      mutate(data);
    }
  };

  return (
    <>
      <h1 className="font-heading text-2xl font-bold">Design your BanhMy!</h1>
      <img src="/images/TacoCloud.png" />
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <div className="ingredient-group" id="wrap">
            <h3 className="text-lg/6 font-bold">Designate your wrap</h3>
            <div key="FLTO">
              <input
                id="1"
                type="checkbox"
                value="1"
                name="FLTO"
                checked={inputs.FLTO || false}
                onChange={handleChange}
              />{' '}
              <span>Flour Tortilla</span>
              <br />
            </div>
            <div key="COTO">
              <input
                id="2"
                type="checkbox"
                value="2"
                name="COTO"
                checked={inputs.COTO || false}
                onChange={handleChange}
              />{' '}
              <span>Corn Tortilla</span>
              <br />
            </div>
          </div>

          <div className="ingredient-group" id="protein">
            <h3 className="text-lg/6 font-bold">Pick your protein</h3>
            <div key="GRBF">
              <input
                id="3"
                type="checkbox"
                value="3"
                name="GRBF"
                checked={inputs.GRBF || false}
                onChange={handleChange}
              />{' '}
              <span>Ground Beef</span>
              <br />
            </div>
            <div key="CARN">
              <input
                id="4"
                type="checkbox"
                value="4"
                name="CARN"
                checked={inputs.CARN || false}
                onChange={handleChange}
              />{' '}
              <span>Carnitas</span>
              <br />
            </div>
          </div>

          <div className="ingredient-group" id="veggies">
            <h3 className="text-lg/6 font-bold">Determine your veggies</h3>
            <div key="TMTO">
              <input
                id="5"
                type="checkbox"
                value="5"
                name="TMTO"
                checked={inputs.TMTO || false}
                onChange={handleChange}
              />{' '}
              <span>Diced Tomatoes</span>
              <br />
            </div>
            <div key="LETC">
              <input
                id="6"
                type="checkbox"
                value="6"
                name="LETC"
                checked={inputs.LETC || false}
                onChange={handleChange}
              />{' '}
              <span>Lettuce</span>
              <br />
            </div>
          </div>

          <div className="ingredient-group" id="cheese">
            <h3 className="text-lg/6 font-bold">Choose your cheese</h3>
            <div key="CHED">
              <input
                id="7"
                type="checkbox"
                value="7"
                name="CHED"
                checked={inputs.CHED || false}
                onChange={handleChange}
              />{' '}
              <span>Cheddar</span>
              <br />
            </div>
            <div key="JACK">
              <input
                id="8"
                type="checkbox"
                value="8"
                name="JACK"
                checked={inputs.JACK || false}
                onChange={handleChange}
              />{' '}
              <span>Monterrey Jack</span>
              <br />
            </div>
          </div>

          <div className="ingredient-group" id="sauce">
            <h3 className="text-lg/6 font-bold">Select your sauce</h3>
            <div key="SLSA">
              <input
                id="9"
                type="checkbox"
                value="9"
                name="SLSA"
                checked={inputs.SLSA || false}
                onChange={handleChange}
              />{' '}
              <span>Salsa</span>
              <br />
            </div>
            <div key="SRCR">
              <input
                id="10"
                type="checkbox"
                value="10"
                name="SRCR"
                checked={inputs.SRCR || false}
                onChange={handleChange}
              />{' '}
              <span>Sour Cream</span>
              <br />
            </div>
          </div>
        </div>
        <div>
          {/* <h3>Name your taco creation:</h3>
          <input
            type="text"
            name="taconame"
            value={inputs.taconame}
            onChange={handleChange}
          /> */}
          <br />
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Add Your BanhMy to Cart
          </button>
          <br />
          <br />
        </div>
      </form>
    </>
  );

  // console.log(ingredients);

  // return (
  //   <>
  //     <h1>Design your taco!</h1>
  //     <img src="/images/TacoCloud.png" />
  //     <form onSubmit={handleSubmit}>
  //       <div className="grid">
  //         {ingredients.map((cat) => (
  //           <div className="ingredient-group" id={cat.name}>
  //             <h3>{cat.title}</h3>
  //             {cat.items.map((ing) => (
  //               <div key={ing.mark}>
  //                 <input
  //                   type="checkbox"
  //                   id={ing.id}
  //                   name={ing.mark}
  //                   value={ing.id}
  //                   checked={inputs.`${ing.mark}` || false}
  //                   onChange={handleChange}
  //                 />
  //                 <span>{ing.name}</span>
  //                 <br />
  //               </div>
  //             ))}
  //           </div>
  //         ))}
  //       </div>
  //       <div>
  //         <h3>Name your taco creation:</h3>
  //         <input
  //           type="text"
  //           name="taconame"
  //           value={inputs.taconame}
  //           onChange={handleChange}
  //         />
  //         <br />
  //         <button>Submit Your Taco</button>
  //       </div>
  //     </form>
  //   </>
  // );
}
