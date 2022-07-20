import { Stack } from "react-bootstrap";

import React from "react";
import HeaderSection from "../../UI/HeaderSection";
import ShoppingItem from "./ShoppingItem";
import styles from "./ShoppingList.module.css";
import Card from "../../UI/Card";

export default function ShoppingList() {
  return (
    <Card>
      <section className={styles["shopping-link"]}>
        <HeaderSection text="Belanjaan">
          <i class="fa-solid fa-circle-plus" /> Add
        </HeaderSection>
        
        <Stack>
          {[1, 2, 3, 4, 5].map((i) => (
            <ShoppingItem key={i} />
          ))}
        </Stack>
      </section>
    </Card>
  );
}
