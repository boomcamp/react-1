import React from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics//Sum'
import VowelCounter from '../Topics/VowelCounter'

export default function TopicBrowser() {
    return (
        <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
            <VowelCounter />
        </div>
    )
}
