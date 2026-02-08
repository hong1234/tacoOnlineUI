import { v4 as uuidv4 } from "uuid";

export function getCartUuid() {
  let cartid = sessionStorage.getItem("cartUuid");
  if (cartid === null) {
    sessionStorage.setItem("cartUuid", uuidv4());
    cartid = sessionStorage.getItem("cartUuid");
  }
  // console.log(cartid);
  return cartid;
}

export function refreshCartUuid() {
  sessionStorage.setItem("cartUuid", uuidv4());
}

export function removeCartUuid() {
  sessionStorage.removeItem("cartUuid");
  // sessionStorage.clear();
}
