import React from 'react';


import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import Squared from '../Topics/SquaredEveryNum'

export default function TopicBrowser() {
  return (
    <React.Fragment>
      <h2>DELFZ</h2>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
      <Squared />
    </React.Fragment>
  )
}