import React from "react";

import CartIcon from "../Cart/CartIcon";
import calsses from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={calsses.button} onClick={props.onClick}> 
    {/* showCartHandler je na ovaj nacin stigao do krajne komponente za otvaranje Cart-a */}
      <span className={calsses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={calsses.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
