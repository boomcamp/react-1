import React from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

function TopicBrowser(){
    return (
        <React.Fragment>
            <EvenAndOdd/>
            <FilterObject/>
            <Palindrome/>
            <Sum/>
        </React.Fragment>
    )
}

export default TopicBrowser