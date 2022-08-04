import React from "react";
import styles from "./PriceTotalCard.module.css";
import moneyFormater from "../helpers/moneyFormater"

export default function PriceTotalCard({ total }) {
  const totalReduce = total ? total.reduce((acc, curr) => acc + curr, 0) : 0

  return (
    <div className={styles["total-section"]}>
      <h5>Total</h5>
      <h5 className={styles.total}>{moneyFormater(totalReduce)}</h5>
    </div>
  );
}
