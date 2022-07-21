import { Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addShoppingList,
  fetchShopping,
} from "../../store/action/shoppingAction";

import React, { Fragment, useEffect, useState } from "react";
import HeaderSection from "../../UI/HeaderSection";
import ShoppingItem from "./ShoppingItem";
import Card from "../../UI/Card";
import FormShoppingItem from "./FormShoppingItem";
import styles from "./ShoppingList.module.css";

export default function ShoppingList() {
  const [add, isAdd] = useState(false);
  const { shopList } = useSelector((state) => state.shopping);
  const dispatch = useDispatch();

  const addToggleHandler = () => isAdd((prev) => !prev);

  const submitAddHandler = (data) => {
    dispatch(addShoppingList(data));
    addToggleHandler();
  };

  useEffect(() => {
    dispatch(fetchShopping());
  }, []);

  return (
    <Card>
      <section className={styles["shopping-link"]}>
        <div className={styles.header}>
          <HeaderSection badge={shopList.length} text="Kebutuhan Daily">
            <i className="fa-solid fa-circle-plus" onClick={addToggleHandler} />
            <span>Add</span>
          </HeaderSection>
        </div>

        <Stack className={styles.list}>
          {add && (
            <Fragment>
              <FormShoppingItem
                onSubmit={submitAddHandler}
                close={addToggleHandler}
              />
            </Fragment>
          )}

          {shopList.length === 0 && !add && (
            <div className={styles["not-found"]}>
              <Card>
                <p>Shopping not found</p>
              </Card>
            </div>
          )}

          {shopList.length > 0 &&
            shopList.map((data) => <ShoppingItem key={data.id} data={data} />)}
        </Stack>
      </section>
    </Card>
  );
}
