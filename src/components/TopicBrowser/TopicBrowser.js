import React from 'react';

//Topics
import EvenAndOdd from '../Topics/EvenAndOdd.js';
import FilterObject from '../Topics/FilterObject.js';
import FilterString from '../Topics/FilterString.js';
import Palindrome from '../Topics/Palindrome.js';
import Sum from '../Topics/Sum.js';
import FoldingToTheMoon from '../Topics/FoldingToTheMoon.js';
import CreatePhoneNumber from '../Topics/CreatePhoneNumber.js';
import CamelCase from '../Topics/CamelCase.js';

export default function TopicBrowser(){
    return (
        <React.Fragment>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
            <FoldingToTheMoon />
            <CreatePhoneNumber />
            <CamelCase />
        </React.Fragment>
    )
}


