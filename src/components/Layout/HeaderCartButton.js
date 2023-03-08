import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import calsses from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={calsses.button} onClick={props.onClick}>
      {/* showCartHandler je na ovaj nacin stigao do krajne komponente za otvaranje Cart-a */}
      <span className={calsses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={calsses.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
