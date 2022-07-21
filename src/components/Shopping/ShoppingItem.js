import { Row, Stack } from "react-bootstrap";

import React from "react";
import styles from "./ShoppingItem.module.css";

export default function ShoppingItem() {
  return (
    <Row className={styles["shopping-item"]}>
      <Stack direction="horizontal" className="d-flex justify-content-between">
        <Stack>
          <h5>
            <a href={"www.facebook.com"}>Celana panjang</a> {` x ${5}`}
          </h5>
          <p>description</p>
        </Stack>
        <h3>190K</h3>
      </Stack>
      <Stack direction="horizontal" gap={3} className={styles.action}>
        <p className={styles.delete}>
          <i className="fa-solid fa-trash-can" />
          Hapus
        </p>
        <p className={styles.edit}>
          <i className="fa-solid fa-pen-to-square" />
          Edit
        </p>
      </Stack>
    </Row>
  );
}
