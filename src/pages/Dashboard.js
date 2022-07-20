import { Container, Stack } from "react-bootstrap";

import React from "react";
import Salary from "../components/Salary/Salary";
import ShoppingList from "../components/Shopping/ShoppingList";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <Container className={styles.dashboard}>
      <Stack gap={4}>
        <Salary />
        <ShoppingList />
      </Stack>
    </Container>
  );
}
