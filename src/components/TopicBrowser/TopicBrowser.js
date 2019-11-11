import React from "react";
import FilterString from "../Topics/FilterString";
import FilterObject from "../Topics/FilterObject";
import EvenAndOdd from "../Topics/EvenAndOdd";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";

export default function TopicBrowser() {
  return (
    <React.Fragment>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
    </React.Fragment>
  );
}
