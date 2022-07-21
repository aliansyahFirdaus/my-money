import React from "react";
import styles from "./HistoryListSalary.module.css";
import numberFormat from "../../../helpers/moneyFormater";

export default function HistoryListSalary({ extra, onDelete }) {
  const deleteExtraHandler = () => onDelete(extra.id);

  return (
    <div className={styles["history-list"]}>
      <span className={styles[extra.amount > 10 ? "debit" : "credit"]}>
        {numberFormat(extra.amount)}
      </span>
      <i className="fa-solid fa-circle-minus" onClick={deleteExtraHandler} />
    </div>
  );
}
