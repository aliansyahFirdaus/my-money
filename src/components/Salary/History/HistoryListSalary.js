import React from "react";
import styles from "./HistoryListSalary.module.css";
import numberFormat from "../../../helpers/moneyFormater";

export default function HistoryListSalary({mount}) {
  return (
    <div className={styles["history-list"]}>
      <span className={styles[mount > 10 ? "debit" : "credit"]}>
        {numberFormat(mount)}
      </span>
      <i class="fa-solid fa-circle-minus" />
    </div>
  );
}
