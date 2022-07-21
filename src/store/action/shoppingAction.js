import { shoppingAction } from "../slice/shoppingSlice";

export const fetchShopping = () => {
  return (dispatch) => {
    fetch("https://my-money-ec63e-default-rtdb.firebaseio.com/shopping.json")
      .then((res) => res.json())
      .then((data) => dispatch(shoppingAction.getShopList(data)))
      .catch((err) => console.log(err));
  };
};
