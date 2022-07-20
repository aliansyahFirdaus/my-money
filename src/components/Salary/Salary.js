import { Stack } from "react-bootstrap";

import React from "react";
import HistorySalary from "./History/HistorySalary";
import styles from "./Salary.module.css";
import numberFormat from "../../helpers/moneyFormater";
import SalaryConfig from "./SalaryConfig/SalaryConfig";
import Card from "../../UI/Card";

export default function Salary() {
  return (
    <Card>
      <section className={styles["base-salary"]}>
        <Stack direction="horizontal" className="justify-content-between">
          <h1>Total</h1>
          <h1>{numberFormat(1900000)}</h1>
        </Stack>
      </section>

      <section>
        <Stack gap={4}>
          <SalaryConfig />
          <HistorySalary />
        </Stack>
      </section>
    </Card>
  );
}
