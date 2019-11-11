import React from "react";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";
import SquareEveryNum from "../Topics/SquareEveryNum";
import Duplicate from "../Topics/Duplicate";

function TopicBrowser() {
  return (
    <div>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
      <SquareEveryNum />
      <Duplicate />
    </div>
  );
}

export default TopicBrowser;
