import React from "react";

import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";
import Product from "../Topics/Product";
import Quotient from "../Topics/Quotient"
import Difference from "../Topics/Difference"

export default function TopicBrowser() {
  return (
    <React.Fragment>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
      <Product />
      <Quotient />
      <Difference />
    </React.Fragment>
  );
}
