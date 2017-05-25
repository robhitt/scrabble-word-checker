# Scrabble Word Checker

* Randomly generated tiles are given to user on each page refresh
* Logic to allow for accidental spaces and still give the correct solution.  For instance, if there’s trailing white space by accident but the word is valid it will still be accepted.
* Case insensitive
* Assigned a copy of the original tile array to a variable to be used after the user submits input && after the input word is entirely checked against original array.
  * If we don’t do this any letter the user may have tried initially has already been removed from the array.
  * With this new functionality the user can keep trying new potential words to use without having to refresh the page.
