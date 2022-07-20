import { Stack } from "react-bootstrap";

import React from "react";
import HeaderSection from "../../../UI/HeaderSection";
import HistoryListSalary from "./HistoryListSalary";
import styles from "./HistorySalary.module.css";

export default function HistorySalary() {
  return (
    <Stack className={styles.history}>
      <HeaderSection text="Extra money">
        <i class="fa-solid fa-circle-plus" /> Add
      </HeaderSection>
      <Stack gap={2}>
        {[1000, 20000].map((mount) => (
          <HistoryListSalary mount={mount} />
        ))}
      </Stack>
    </Stack>
  );
}
