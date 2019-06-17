import React from 'react';
import EvenAndOdd from './EvenAndOdd';
import FilterObject from './FilterObject';
import FilterString from './FilterString';
import Palindrome from './Palindrome';
import Sum from './Sum';

export default function index(){
        return(

            <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
            </div>

        );
}

