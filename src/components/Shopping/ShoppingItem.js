import { Row, Stack } from "react-bootstrap";

import React, { useState } from "react";
import styles from "./ShoppingItem.module.css";
import FormShoppingItem from "./FormShoppingItem";

export default function ShoppingItem() {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEditHandler = () => setIsEdit((prev) => !prev);

  const submitEditShoppingItems = () => {
    console.log("done");
  };

  return (
    <Row className={styles["shopping-item"]}>
      {isEdit && <FormShoppingItem />}

      {!isEdit && (
        <Stack
          direction="horizontal"
          className="d-flex justify-content-between"
        >
          <Stack>
            <h5>
              <a href={"www.facebook.com"}>Celana panjang</a> {` x ${5}`}
            </h5>
            <p>description</p>
          </Stack>
          <h3>190K</h3>
        </Stack>
      )}

      <Stack direction="horizontal" gap={3} className={styles.action}>
        {!isEdit && (
          <p className={styles.delete}>
            <i className="fa-solid fa-trash-can" /> <span>Delete</span>
          </p>
        )}

        {!isEdit && (
          <p className={styles.edit} onClick={toggleEditHandler}>
            <i className="fa-solid fa-pen-to-square" /> <span>Edit</span>
          </p>
        )}

        {isEdit && (
          <p className={styles.edit} onClick={toggleEditHandler}>
            <i class="fa-solid fa-xmark" /> <span>Cancel</span>
          </p>
        )}

        {isEdit && (
          <p className={styles.done} onClick={submitEditShoppingItems}>
            <i class="fa-solid fa-check" /> <span>Done</span>
          </p>
        )}
      </Stack>
    </Row>
  );
}
