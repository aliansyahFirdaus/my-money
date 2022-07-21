import { salaryAction } from "../slice/salarySlice";

export const fetchSalary = () => {
  return (dispatch) => {
    fetch("https://my-money-ec63e-default-rtdb.firebaseio.com/salary.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(salaryAction.getBaseSalary(data.base));
        dispatch(salaryAction.getExtraSalary(data.extra));
      })
      .catch((err) => console.log(err));
  };
};

export const changeBaseSalary = (newBaseSalary) => {
  return (dispatch) => {
    fetch(
      "https://my-money-ec63e-default-rtdb.firebaseio.com/salary/base.json",
      {
        method: "PUT",
        body: JSON.stringify(newBaseSalary),
        headers: { "Content-type": "application/json" },
      }
    )
      .then(() =>
        fetch("https://my-money-ec63e-default-rtdb.firebaseio.com/salary.json")
      )
      .then((res) => res.json())
      .then((data) => {
        dispatch(salaryAction.getBaseSalary(data.base));
      });
  };
};

export const deleteExtraSalary = (id) => {
  return (dispatch) => {
    fetch(
      `https://my-money-ec63e-default-rtdb.firebaseio.com/salary/extra/${id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => dispatch(fetchSalary()));
  };
};

export const addExtraSalary = (extra) => {
  return (dispatch) => {
    fetch(
      `https://my-money-ec63e-default-rtdb.firebaseio.com/salary/extra.json`,
      {
        method: "POST",
        body: JSON.stringify(extra),
        headers: { "Content-type": "application/json" },
      }
    )
      .then(() =>
        fetch(
          "https://my-money-ec63e-default-rtdb.firebaseio.com/salary/extra/.json"
        )
      )
      .then((res) => res.json())
      .then((data) => {
        dispatch(salaryAction.getExtraSalary(data));
      });
  };
};
