import { Col, Row, Stack } from "react-bootstrap";

import React from "react";
import styles from "./HeaderSection.module.css";

export default function HeaderSection({ text, children }) {
  return (
    <Row className={styles["header-section"]}>
      <Col className="d-flex justify-content-between">
        <Stack direction="horizontal" className="text">
          <h5>{text}</h5>
        </Stack>

        <div className={styles.button}>{children}</div>
      </Col>
    </Row>
  );
}
