/* Stacks */
// functions: push,pop,peek,length
var letters = []
var word = "racecar"
var rword= ""
 // put letters of word into stacks
 for (var i=0; i<word.length;i++){
 	letters.push(word[i])
 	console.log("letter stack: " + letters)
 } 
// pop off the stack in reverse order
for (var i=0;i<word.length; i++){
 	rword+= letters.pop();
 	console.log("reverse letter stack: "+rword)
}

if (word == rword ){
	console.log("This word is a palindrome")
}
else{
	console.log("This word is not a palindrome")
}
