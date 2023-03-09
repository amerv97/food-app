import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // Uvijek ide .current kod Ref
    const enteredAmountNumber = +enteredAmount;
    // na ovaj nacin pretvaramo string u broj
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
      // classic validation
    ) {
      setAmountIsValid(false);
      return;
    };

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        // nacin na koji prosljedujemo ref je tako sto odemo na komponentu u kojoj zelimo da fowardujemo i jednostavno tu funkciju wrapujemo sa React,fowardRef(), kao sto smo i u ovom slucaju uradili
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button >
      {!amountIsValid && <p>Please enter a valid amount 1-5.</p>}
    </form>
  );
};

export default MealItemForm;
