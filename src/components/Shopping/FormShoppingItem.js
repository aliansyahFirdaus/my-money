import {
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Stack,
} from "react-bootstrap";

import React from "react";
import styles from "./FormShoppingItem.module.css";

export default function FormShoppingItem() {

  return (
    <Form className={styles["form-shopping"]}>
      <Stack gap={2}>
        <Form.Control
          className={styles.title}
          type="text"
          placeholder="Title"
        />
        <Stack direction="horizontal" gap={2}>
          <Form.Control className={styles.price} type="number" placeholder="Price" />
          <InputGroup className="mb-3" className={styles.quantity}>
            <Form.Control
              aria-label="Text input with dropdown button"
              defaultValue={1}
            />
            <DropdownButton
              variant="outline-secondary"
              title={"pcs"}
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Stack>
        <Form.Control className={styles.link} type="text" placeholder="Link" />
        <Form.Control as="textarea" rows={3} className={styles.link} />
      </Stack>
    </Form>
  );
}
