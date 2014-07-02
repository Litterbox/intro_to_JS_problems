### Problems

##### Another problem here not using mods
##### Add a problem dealing with objects

#### X's And O's

Write a program that starts with a number variable (like `var count = 5;`), then prints alternating X's then O's to the screen until the count is reached.  For example, if the count is 5, the output should be:

```
X
O
X
O
X
```

__BONUS__:  Also add code to print Z on every 7th character.  In other words, if the count is set to 15, the output should be the following:

```
X
O
X
O
X
O
Z
O
X
O
X
O
X
Z
X
```

#### Sort and Print Center

Write a program that sorts an array of numbers (the numbers should be between 0 and 9) then prints out the value in the center of the array.  If the array has an even number of elements, print out both numbers in the middle, separated by a comma.  For example, the following array:

```
var arr = [9,1,3,0];
```

Should print out:

```
1,3
```

__HINT__:  You will need to use `Math.floor`.  Look up [floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)  in the MDN docs to see what floor does.  For symetries sake, look up [ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) as well.

__BONUS__: Notice that your program breaks if you use an number greater than 9.  Why is that?  How would you fix it?

#### Palindrome

Write a program that decides if a word is a palindrome. A palindrome is a word that is the same when spelled forward or in reverse. For example, wow is a palindrome. It is the same string when reversed.  __BONUS__: Ignore white spaces.  For example, if you complete the bonus, __race car__ would be considered a palindrome.

__HINTS__:  Read about javascript strings.  They are immutable.  What does that mean?  Look at the built in javascript functions.  __reverse__ would be helpful.

#### Find the Min

Write a program that finds the smallest value in an array.  __BONUS__ This is a somewhat difficult bonus.  Look up the `forEach` method in javascript and figure out how to use it in your min program.  Only do this after you've solved the problem without using `forEach`.

#### Frame Your Phrase

Write a program that prints a phrase to the screen that is framed by asterisks.  For example, the phrase  `Hello and welcome to javascript` would be printed in this way:

```
**************
* Hello      *
* and        *
* welcome    *
* to         *
* javascript *
**************
```

The program should work for any phrase you add.

__HINT__:  In order to understand this problem, you'll have to understand the find min problem first.

__HINT__: Here is a neat trick to make the printing easier.  Let's say I want to print out 20 `*`'s.  To do this in code, I could create an empty array of 21 spaces and then join those empty items into a string using the aterisk character.  Therefore, to make 20 `*`'s, do this:

```
var asteriskString = Array(21).join('*');
```