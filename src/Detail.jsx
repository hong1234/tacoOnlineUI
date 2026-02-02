import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getTaco } from "./api/getTaco";

const Detail = () => {
  const { tacoId } = useParams();
  const { isLoading, data: taco } = useQuery({
    queryKey: ["taco", tacoId],
    queryFn: () => getTaco(tacoId),
  });

  if (isLoading || taco === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  return taco == null ? null : (
    <div className="row">
      {/* <img
        className="col-12 col-sm-4 col-md-4"
        src={product.image}
        alt="photo"
      /> */}
      <div className="col-12 col-sm-8 col-md-8">
        {/* <div className="bg-primary text-white text-center p-1" /> */}
        {/* <p className="card-title fw-bold">{taco.id}</p> */}
        <h3 className="card-text">
          {taco.name} - Id: {taco.id}
        </h3>
        {/* <p className="card-text">{product.unitPrice} $</p> */}
        {/* <button onClick={handleAddItem}>add to cart</button> */}
        {/* <button onClick={() => mutate(productId)}>add to cart</button> */}
        <div className="">
          {taco.ingredients.map((item) => (
            <div key={item.name}>
              <p className="fw-bold">
                {item.name} - {item.ingredientType}
              </p>
              {/* <p className="">{item.ingredientType}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
