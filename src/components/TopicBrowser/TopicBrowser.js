import React from "react";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";
import ReverseArray from "../Topics/ReverseArray";

export default function TopicBrowser() {
  return (
    <React.Fragment>
      <br />
      <div>Clark</div>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
      <ReverseArray />
    </React.Fragment>
  );
}
