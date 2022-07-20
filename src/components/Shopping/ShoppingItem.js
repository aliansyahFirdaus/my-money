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
    </Row>
  );
}