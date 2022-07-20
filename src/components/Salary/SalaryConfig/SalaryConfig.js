import { Form, Stack } from "react-bootstrap";

import React, { useState } from "react";
import HeaderSection from "../../../UI/HeaderSection";
import numberFormat from "../../../helpers/moneyFormater";
import styles from "./SalaryConfig.module.css";

export default function SalaryConfig() {
  const [isEdit, setIsEdit] = useState(false);
  const [salary, setSalary] = useState(1900000);

  const salaryEditSubmit = (e) => {
    e.preventDefault();
    console.log(salary);
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
          <h4 className={styles["current-salary"]}>{numberFormat(salary)}</h4>
        )}
        {isEdit && (
          <Form onSubmit={salaryEditSubmit} className={styles["edit-salary"]}>
            <Form.Control
              type="number"
              defaultValue={salary}
              onChange={(e) => setSalary(e.target.value)}
              onBlur={salaryEditSubmit}
            />
          </Form>
        )}
      </Stack>
    </Stack>
  );
}
