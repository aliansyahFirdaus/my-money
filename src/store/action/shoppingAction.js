import { shoppingAction } from "../slice/shoppingSlice";

export const fetchShopping = () => {
  return (dispatch) => {
    fetch("https://my-money-ec63e-default-rtdb.firebaseio.com/shopping.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(shoppingAction.getShopList(data));
      })
      .catch((err) => console.log(err));
  };
};

export const addShoppingList = (data) => {
  return (dispatch) => {
    fetch("https://my-money-ec63e-default-rtdb.firebaseio.com/shopping.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => dispatch(fetchShopping()));
  };
};

export const deleteShoppingList = (id) => {
  return (dispatch) => {
    fetch(
      `https://my-money-ec63e-default-rtdb.firebaseio.com/shopping/${id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => dispatch(fetchShopping()));
  };
};

export const editShoppingList = (data, id) => {
  return (dispatch) => {
    fetch(
      `https://my-money-ec63e-default-rtdb.firebaseio.com/shopping/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => dispatch(fetchShopping()));
  };
};
