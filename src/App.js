import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartiIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    // funkcija koja ce nam pokazati chart, prilikom  pritiskanja na cart ikonu
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartiIsShown && <Cart onClose={hideCartHandler} />}
      {/* cartIsShown unosimo iz razloga sto ujedno tu i renderujemo Cart, a posto je gore u useState funkiji inicijalno stavljeno "False" cart ce nestati, odnosno nece se pojavljivati */}
      {/* onClose={hideCartHandler} kako bi zatvorili Cart, funkciju preusmjeravamo na <Cart/> komponentu, gdje se nalazi <button> koji istu zatvara  */}
      <Header onShowCart={showCartHandler} />
      {/* da bi radila funkcja showCartHandler, koristit cemo props, kako bi njeno dejstvo preusmjerili na Header koponentu, jer se u Headeru i nalazi Cart button */}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
