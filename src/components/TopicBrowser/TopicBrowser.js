import React from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd.js';
import FilterObject from '../Topics/FilterObject.js';
import FilterString from '../Topics/FilterString.js';
import Palindrome from '../Topics/Palindrome.js';
import Sum from '../Topics/Sum.js';

export default function TopicBrowser() {
    return (
        <React.Fragment>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
        </React.Fragment>

    )
}


// export default TopicBrowser;