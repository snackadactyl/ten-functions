"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//Question 1
function isTrue(input) {
    return input === true;
}

//Question 2
function isFalse(input) {
    return input === false;
}

//Question 3
function not(input) {
   return !input;
}

//Question 4
function addOne(input) {
   input = Number(input)
    return input +1
}

//Question 5
function isEven(input) {
    return input % 2 === 0

}

//Question 6
function isIdentical (a, b) {
    if (a === b) {
        return true
    } else{
        return false
    }


}
//Question 7
function isEqual (inputOne, inputTwo) {
    if (inputOne == inputTwo) {
        return true
    } else{
        return false
    }
}

//Question 8
function or (inputAlpha, inputBeta) {
    return (inputAlpha || inputBeta)
}

//Question 9
function and (a, b) {
    return (a && b)
}

//Question 10

function concat (a, b) {
    return String(a) + String(b);
}