import React from "react";
import styles from "./HistoryListSalary.module.css";
import numberFormat from "../../../helpers/moneyFormater";

export default function HistoryListSalary({ data, onDelete, type }) {
  const deleteExtraHandler = () => onDelete(data.id);

  return (
    <div className={styles["history-list"]}>
      <span className={styles[type === "extra" ? "extra" : "kredit"]}>
        {type === "kredit" ? "-" : ""} {numberFormat(data.amount)}
      </span>
      <i className="fa-solid fa-circle-minus" onClick={deleteExtraHandler} />
    </div>
  );
}
