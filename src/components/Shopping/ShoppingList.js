import { Stack } from "react-bootstrap";

import React, { useEffect } from "react";
import HeaderSection from "../../UI/HeaderSection";
import ShoppingItem from "./ShoppingItem";
import styles from "./ShoppingList.module.css";
import Card from "../../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopping } from "../../store/action/shoppingAction";

export default function ShoppingList() {
  const { shopList } = useSelector((state) => state.shopping);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(shopList, "==============")
    dispatch(fetchShopping());
  }, []);

  return (
    <Card>
      <section className={styles["shopping-link"]}>
        <div className={styles.header}>
          <HeaderSection text="Kebutuhan Daily">
            <i className="fa-solid fa-circle-plus" /> Add
          </HeaderSection>
        </div>

        <Stack gap={3} className={styles.list}>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <ShoppingItem key={i} />
          ))}
        </Stack>
      </section>
    </Card>
  );
}
