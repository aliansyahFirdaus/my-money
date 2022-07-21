import { Form, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeBaseSalary } from "../../../store/action/salaryAction";

import React, { useState } from "react";
import HeaderSection from "../../../UI/HeaderSection";
import numberFormat from "../../../helpers/moneyFormater";
import styles from "./SalaryConfig.module.css";

export default function SalaryConfig({ base }) {
  const dispatch = useDispatch();
  
  const [isEdit, setIsEdit] = useState(false);
  const [baseSalary, setBaseSalary] = useState(base);

  const salaryEditSubmit = (e) => {
    e.preventDefault();
    dispatch(changeBaseSalary(Number(baseSalary)));
    setIsEdit(false);
  };

  const salaryEditToggle = (e) => {
    e.preventDefault();
    setIsEdit((prev) => !prev);
  };

  return (
    <Stack direction="horizontal" className={styles["salary-config"]}>
      <Stack>
        <HeaderSection text="Base salary">
          {!isEdit && (
            <div onClick={salaryEditToggle}>
              <i className="fa-solid fa-italic" /> Edit
            </div>
          )}
        </HeaderSection>

        {!isEdit && (
          <h4 className={styles["current-salary"]}>
            {numberFormat(baseSalary)}
          </h4>
        )}
        {isEdit && (
          <Form onSubmit={salaryEditSubmit} className={styles["edit-salary"]}>
            <Form.Control
              type="number"
              defaultValue={baseSalary}
              onChange={(e) => setBaseSalary(e.target.value)}
              onBlur={salaryEditSubmit}
            />
          </Form>
        )}
      </Stack>
    </Stack>
  );
}
