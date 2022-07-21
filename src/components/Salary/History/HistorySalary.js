import { Form, Stack } from "react-bootstrap";

import React, { Fragment, useRef, useState } from "react";
import HeaderSection from "../../../UI/HeaderSection";
import HistoryListSalary from "./HistoryListSalary";
import styles from "./HistorySalary.module.css";
import { useDispatch } from "react-redux";
import { addExtraSalary, deleteExtraSalary } from "../../../store/action/salaryAction";
import Card from "../../../UI/Card";

export default function HistorySalary({ data }) {
  const dispatch = useDispatch();
  const extra = useRef();

  const [add, setAdd] = useState(false);

  const addToggleHandler = () => {
    setAdd((prev) => !prev);
  };

  const submitAddHandler = (e) => {
    e.preventDefault();
    if (!extra) return;
    dispatch(addExtraSalary(Number(extra.current.value)));
    addToggleHandler();
  };

  const deleteAddHandler = (id) => {
    dispatch(deleteExtraSalary(id))
  }

  return (
    <Stack className={styles.history}>
      <HeaderSection text="Extra money">
        {!add && (
          <Fragment>
            <i className="fa-solid fa-circle-plus" onClick={addToggleHandler} />{" "}
            <span>Add</span>
          </Fragment>
        )}
      </HeaderSection>

      <Stack gap={2}>
        {add && (
          <div className={styles.add}>
            <Form onSubmit={submitAddHandler}>
              <Form.Control type="number" ref={extra} />
            </Form>
            <p onClick={addToggleHandler}>cancel</p>
          </div>
        )}

        {data.length > 0 &&
          data.map((extra) => (
            <HistoryListSalary key={extra.id} extra={extra} onDelete={deleteAddHandler} />
          ))}
      </Stack>

      {data.length === 0 && !add && (
        <div className={styles["not-found"]}>
          <Card>
            <p>Extras not found</p>
          </Card>
        </div>
      )}
    </Stack>
  );
}
