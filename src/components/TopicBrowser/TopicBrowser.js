import React from 'react'

import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import ValidParenthesis from '../Topics/ValidParenthesis'

export default function TopicBrowser() {
    return (
        <React.Fragment>
            <EvenAndOdd/>
            <FilterObject/>
            <FilterString/>
            <Palindrome/>
            <Sum/>
            <ValidParenthesis/>
        </React.Fragment>
    );
}