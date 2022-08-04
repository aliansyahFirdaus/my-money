import { Form, Stack } from "react-bootstrap";
import { addExtraSalary, addKreditSalary, deleteExtraSalary, deleteKreditSalary } from "../../../store/action/salaryAction";
import { useDispatch } from "react-redux";

import React, { Fragment, useRef, useState } from "react";
import HeaderSection from "../../../UI/HeaderSection";
import HistoryListSalary from "./HistoryListSalary";
import styles from "./HistorySalary.module.css";
import Card from "../../../UI/Card";

export default function HistorySalary({ extras, kredit }) {
  const dispatch = useDispatch();
  const extraRef = useRef();
  const kreditRef = useRef();

  const [addExtra, setAddExtra] = useState(false);
  const [addKredit, setAddKredit] = useState(false);


  const addExtraToggleHandler = () => setAddExtra((prev) => !prev);
  const addKreditToggleHandler = () => setAddKredit((prev) => !prev);

  const submitExtraHandler = (e) => {
    e.preventDefault();
    if (!extraRef) return;
    dispatch(addExtraSalary(Number(extraRef.current.value)));
    addExtraToggleHandler();
  };

  const submitKreditHandler = (e) => {
    e.preventDefault();
    if (!kreditRef) return;
    dispatch(addKreditSalary(Number(kreditRef.current.value)));
    console.log("kredit")
    addKreditToggleHandler();
  };

  const deleteDebitHandler = (id) => {
    dispatch(deleteExtraSalary(id))
  }

  const deleteKreditHandler = (id) => {
    dispatch(deleteKreditSalary(id))
  }

  return (
    <Stack className={styles.history}>

      <div className={styles.debit}>
        <HeaderSection text="Debit">
          {!addExtra && (
            <Fragment>
              <i className="fa-solid fa-circle-plus" onClick={addExtraToggleHandler} />{" "}
              <span>Add</span>
            </Fragment>
          )}
        </HeaderSection>

        <Stack gap={2}>
          {addExtra && (
            <div className={styles.add}>
              <Form onSubmit={submitExtraHandler}>
                <Form.Control type="number" ref={extraRef} />
              </Form>
              <p onClick={addExtraToggleHandler}>cancel</p>
            </div>
          )}

          {extras.length > 0 &&
            extras.map((extra) => (
              <HistoryListSalary type="extra" key={extra.id} data={extra} onDelete={deleteDebitHandler} />
            ))}
        </Stack>

        {extras.length === 0  && !addExtra && (
          <div className={styles["not-found"]}>
            <Card>
              <p>Extras not found</p>
            </Card>
          </div>
        )}
      </div>

      <div className={styles.kredit}>
        <HeaderSection text="Kredit">
          {!addKredit && (
            <Fragment>
              <i className="fa-solid fa-circle-plus" onClick={addKreditToggleHandler} />{" "}
              <span>Add</span>
            </Fragment>
          )}
        </HeaderSection>

        <Stack gap={2}>
          {addKredit && (
            <div className={styles.add}>
              <Form onSubmit={submitKreditHandler}>
                <Form.Control type="number" ref={kreditRef} />
              </Form>
              <p onClick={addKreditToggleHandler}>cancel</p>
            </div>
          )}

          {kredit.length > 0 &&
            kredit.map((kredit) => (
              <HistoryListSalary type="kredit" key={kredit.id} data={kredit} onDelete={deleteKreditHandler} />
            ))}
        </Stack>

        {kredit.length === 0  && !addKredit && (
          <div className={styles["not-found"]}>
            <Card>
              <p>Kredit not found</p>
            </Card>
          </div>
        )}
      </div>

    </Stack>
  );
}
