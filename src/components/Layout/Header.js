import React from "react";
import classes from "./Header.module.css";

import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>음식주문</h1>
        <HeaderCartButton />
      </header>
      {/* css class명에 - 이 들어갈 경우 . 사용 불가 */}
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="음식사진" />
      </div>
    </React.Fragment>
  );
};

export default Header;
