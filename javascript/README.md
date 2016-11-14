#Exercices Javascript

Estas son mis soluciones para los ejercicios de Javascript:


##01-firts-steps


**[Integer Numbers Range](https://github.com/danivm/exercices-javascript/blob/master/01-first-steps/listNum.js)**

Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1

**[Multiplications table](https://github.com/danivm/exercices-javascript/blob/master/01-first-steps/multTable.js)**

Write a function that writes in the console the multiplication table (from 1 to 10)

**[Multiplications table on demand](https://github.com/danivm/exercices-javascript/blob/master/01-first-steps/multTableDem.js)**

Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

**[Calculation](https://github.com/danivm/exercices-javascript/blob/master/01-first-steps/calculation.js)**

Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them
```
Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313
```

**[max() function](https://github.com/danivm/exercices-javascript/blob/master/01-first-steps/max.js)**

Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

**[maxOfThree() function](https://github.com/danivm/exercices-javascript/blob/master/01-first-steps/maxOfThree.js)**

Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

**[isVowel() function](https://github.com/danivm/exercices-javascript/blob/master/01-first-steps/isVowel.js)**

Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

**[Hexadecimal](https://github.com/danivm/exercices-javascript/blob/master/01-first-steps/hexadecimal.js)**

Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

**[Hexadecimal enhanced](https://github.com/danivm/exercices-javascript/blob/master/01-first-steps/hexadecimal.js)**

Improves the previous function so besides the conversion also identifies some basic colors:

* Black: #000000
* White: #FFFFFF
* Red: #FF0000
* Green: #00FF00
* Blue: #0000FF    

##02-more-steps

**[translate()](https://github.com/danivm/exercices-javascript/blob/master/02-more-steps/translate.js)**

Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

**[sum()](https://github.com/danivm/exercices-javascript/blob/master/02-more-steps/sum.js) & [multiply()](https://github.com/danivm/exercices-javascript/blob/master/02-more-steps/multiply.js)**

Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

**[reverse()](https://github.com/danivm/exercices-javascript/blob/master/02-more-steps/reverse.js)**

Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

**[translate()](https://github.com/danivm/exercices-javascript/blob/master/02-more-steps/translateSwedish.js)**

Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

**[findLongestWord()](https://github.com/danivm/exercices-javascript/blob/master/02-more-steps/findLongestWord.js)**

Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

**[filterLongWords()](https://github.com/danivm/exercices-javascript/blob/master/02-more-steps/filterLongWords.js)**

Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

**[charFreq()](https://github.com/danivm/exercices-javascript/blob/master/02-more-steps/charFreq.js)**

Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").


##03-and-more


**[randomLargest()](https://github.com/danivm/exercices-javascript/blob/master/03-and-more/randomLargest.js)**

Randomizes three numbers in range (0.. 100) and prints the largest one.

**[randomEven()](https://github.com/danivm/exercices-javascript/blob/master/03-and-more/randomEven.js)**

Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.

**[randomOdd()](https://github.com/danivm/exercices-javascript/blob/master/03-and-more/randomOdd.js)**

Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40 nothing should be printed

**[randomOddSmallers()](https://github.com/danivm/exercices-javascript/blob/master/03-and-more/randomOddSmallers.js)**

Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)

**[randomRandom()](https://github.com/danivm/exercices-javascript/blob/master/03-and-more/randomRandom.js)**

Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.

**[randomSum()](https://github.com/danivm/exercices-javascript/blob/master/03-and-more/randomSum.js)**

Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14

**[randomOne()](https://github.com/danivm/exercices-javascript/blob/master/03-and-more/randomOne.js)**

Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. For instance, if the randomized number was 1049, program should print 5

**[randomSmallest()](https://github.com/danivm/exercices-javascript/blob/master/03-and-more/randomSmallest.js)**

Randomizes two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.

**randomLeastCommon()**

Randomizes two numbers and prints their least common multiplication of them. (use http://en.wikipedia.org/wiki/Least_common_multiple for details) Randomizes two numbers and prints their average and standard deviation.