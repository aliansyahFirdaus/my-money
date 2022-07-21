import { Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalary } from "../../store/action/salaryAction";

import React, { useEffect } from "react";
import HistorySalary from "./History/HistorySalary";
import numberFormat from "../../helpers/moneyFormater";
import SalaryConfig from "./SalaryConfig/SalaryConfig";
import Card from "../../UI/Card";
import styles from "./Salary.module.css";

export default function Salary() {
  const dispatch = useDispatch();
  const { total, base, extras } = useSelector((state) => state.salary);

  useEffect(() => {
    dispatch(fetchSalary());
  }, []);

  return (
    <Card>
      <section className={styles["base-salary"]}>
        <Stack direction="horizontal" className="justify-content-between">
          <h1>Total</h1>
          <h1>{numberFormat(total)}</h1>
        </Stack>
      </section>

      <section>
        <Stack gap={4}>
          {base && <SalaryConfig base={base} />}
          {extras && <HistorySalary data={extras} />}
        </Stack>
      </section>
    </Card>
  );
}
