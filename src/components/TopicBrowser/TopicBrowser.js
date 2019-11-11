import React, {Component}  from 'react';


import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palimdrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';
export default function TopicBrowser (){
   return(
    <React.Fragment>
        <EvenAndOdd/>
        <FilterObject/>
        <FilterString/>
        <Palimdrome/>
        <Sum/>
    </React.Fragment>
   )
}
