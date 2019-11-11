import React from "react";

// Topics
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";
//Challenge
import Reverse from "../Topics/Reverse";
import AscOrd from "../Topics/AscOrd";
import PigLatin from "../Topics/PigLatin";

export default function TopicBrowser() {
  return (
    <React.Fragment>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
      <Reverse />
      <AscOrd />
      <PigLatin />
    </React.Fragment>
  );
}
