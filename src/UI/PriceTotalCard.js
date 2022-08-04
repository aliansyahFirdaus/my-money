import React from "react";
import styles from "./PriceTotalCard.module.css";
import moneyFormater from "../helpers/moneyFormater"

export default function PriceTotalCard({ total }) {
  return (
    <div className={styles["total-section"]}>
      <h5>Total</h5>
      <h5 className={styles.total}>{moneyFormater(total)}</h5>
    </div>
  );
}
