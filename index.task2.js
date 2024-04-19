//Task #:2

// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript

//make using arrow function

const sentence = "take a sentence as input";

const reverseSentence = sentence => sentence.split(" ").reverse().join(" ");

const capitalizeSentence = sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1);

const reversedSentence = reverseSentence(sentence);

const capitalizedSentence = capitalizeSentence(reversedSentence);

console.log(capitalizedSentence);

// Output:  Input as sentence a take sample 
// Explanation: The input sentence is reversed and the first letter is capitalized.
// The reversed sentence is: "input as sentence a take"
