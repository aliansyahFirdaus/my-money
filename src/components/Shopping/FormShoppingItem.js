import {
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Stack,
} from "react-bootstrap";

import React, { useState } from "react";
import styles from "./FormShoppingItem.module.css";

export default function FormShoppingItem({ onSubmit, close, data }) {
  const [unit, setUnit] = useState(data?.unit || "pcs");
  const [title, setTitle] = useState(data?.title || "");
  const [link, setLink] = useState(data?.link || "");
  const [quantity, setQuantity] = useState(data?.quantity || "1");
  const [description, setDescription] = useState(data?.description || "");
  const [price, setPrice] = useState(data?.price || "");

  // const titleRef = useRef();
  // const linkRef = useRef();
  // const quantityRef = useRef();
  // const priceRef = useRef();
  // const descRef = useRef();

  const titleHandler = (e) => setTitle(e.target.value);
  const linkHandler = (e) => setLink(e.target.value);
  const quantityHandler = (e) => setQuantity(e.target.value);
  const descriptionHandler = (e) => setDescription(e.target.value);
  const priceHandler = (e) => setPrice(e.target.value);
  const unitHandler = (e) => setUnit(e.target.value);

  const submitHandler = () => {
    const data = {
      title,
      link,
      quantity: Number(quantity),
      price: Number(price),
      description,
      unit,
    };

    onSubmit(data);
  };

  return (
    <Form className={styles["form-shopping"]} onSubmit={submitHandler}>
      <Stack gap={2}>
        <Form.Control
          className={styles.title}
          type="text"
          placeholder="Title"
          value={title}
          onChange={titleHandler}
          // ref={titleRef}
        />

        <Stack direction="horizontal" gap={2}>
          <Form.Control
            className={styles.price}
            type="number"
            placeholder="Price"
            value={price}
            onChange={priceHandler}
            // ref={priceRef}
          />

          <InputGroup className={styles.quantity}>
            <Form.Control
              aria-label="Text input with dropdown button"
              value={quantity}
              onChange={quantityHandler}
              min={1}
              // ref={quantityRef}
            />

            <DropdownButton
              variant="outline-secondary"
              title={unit}
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item onClick={unitHandler} active={unit === "pcs"}>
                pcs
              </Dropdown.Item>
              <Dropdown.Item onClick={unitHandler} active={unit === "ml"}>
                ml
              </Dropdown.Item>
              <Dropdown.Item onClick={unitHandler} active={unit === "lt"}>
                lt
              </Dropdown.Item>
              <Dropdown.Item onClick={unitHandler} active={unit === "cps"}>
                capsule
              </Dropdown.Item>
              <Dropdown.Item onClick={unitHandler} active={unit === "kg"}>
                kg
              </Dropdown.Item>
              <Dropdown.Item onClick={unitHandler} active={unit === "gr"}>
                gr
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Stack>

        <Form.Control
          className={styles.link}
          type="text"
          placeholder="Link"
          value={link}
          onChange={linkHandler}
          // ref={linkRef}
        />

        <Form.Control
          as="textarea"
          rows={3}
          className={styles.description}
          value={description}
          onChange={descriptionHandler}
          // ref={descRef}
        />
      </Stack>

      <Stack direction="horizontal" gap={3} className={styles.action}>
        <p className={styles.danger} onClick={close}>
          <i className="fa-solid fa-xmark" /> <span>Cancel</span>
        </p>

        <p className={styles.success} onClick={submitHandler}>
          <i className="fa-solid fa-check" /> <span>Done</span>
        </p>
      </Stack>
    </Form>
  );
}
