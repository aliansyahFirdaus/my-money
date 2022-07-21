import { useDispatch } from "react-redux";
import { Row, Stack } from "react-bootstrap";
import {
  deleteShoppingList,
  editShoppingList,
} from "../../store/action/shoppingAction";

import React, { useState } from "react";
import styles from "./ShoppingItem.module.css";
import FormShoppingItem from "./FormShoppingItem";

export default function ShoppingItem({ data }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isRealPrice, setIsRealPrice] = useState(false);

  const dispatch = useDispatch();

  const toggleEditHandler = () => setIsEdit((prev) => !prev);

  const priceTotalHandler = (real) =>
    (real ? data.price : data.quantity * data.price) / 1000;

  const priceToggle = () => setIsRealPrice((prev) => !prev);

  const submitEditShoppingItems = (newData) => {
    dispatch(editShoppingList(newData, data.id));
    toggleEditHandler();
  };

  const deleteHandler = () => dispatch(deleteShoppingList(data.id));

  return (
    <Row className={styles["shopping-item"]}>
      {isEdit && (
        <FormShoppingItem
          onSubmit={submitEditShoppingItems}
          close={toggleEditHandler}
          data={data}
        />
      )}

      {!isEdit && (
        <Stack
          direction="horizontal"
          className="d-flex justify-content-between"
        >
          <Stack gap={1}>
            <a href={data?.link}>
              <h5>{data?.title}</h5>
            </a>

            <p className={styles.quantity}>{` x ${
              isRealPrice ? "1" : data?.quantity
            } ${data?.unit}`}</p>

            <p className={styles.desc}>{data?.description}</p>
          </Stack>
          <h3 onClick={priceToggle}>{priceTotalHandler(isRealPrice)}K</h3>
        </Stack>
      )}

      <Stack direction="horizontal" gap={3} className={styles.action}>
        {!isEdit && (
          <p className={styles.danger} onClick={deleteHandler}>
            <i className="fa-solid fa-trash-can" /> <span>Delete</span>
          </p>
        )}
        {!isEdit && (
          <p className={styles.warning} onClick={toggleEditHandler}>
            <i className="fa-solid fa-pen-to-square" /> <span>Edit</span>
          </p>
        )}
      </Stack>
    </Row>
  );
}
