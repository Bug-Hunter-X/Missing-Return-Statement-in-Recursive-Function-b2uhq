# Missing Return Statement in Recursive Function

This repository demonstrates a common error in JavaScript: forgetting to return a value from a recursive function. The `bug.js` file contains a recursive function with a missing return statement, leading to incorrect results. The `bugSolution.js` file provides a corrected version with the necessary return statement.

## Bug Description

The `bar` function in `bug.js` attempts to recursively compare two numbers.  However, it's missing a `return` statement in the recursive case. This causes the function to implicitly return `undefined`.

## Solution

The `bugSolution.js` file fixes this bug by explicitly returning the result of the recursive call `bar(a + 1, b)`.  This ensures the function correctly returns `true` or `false` based on the comparison.