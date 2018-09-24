/* Stacks */
// functions: push,pop,peek,length
var letters = []
var word = "racecar"
var rword = ""
// put letters of word into stacks
for (var i = 0; i < word.length; i++) {
	letters.push(word[i])
	console.log("letter stack: " + letters)
}
// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
	rword += letters.pop();
	console.log("reverse letter stack: " + rword)
}

if (word == rword) {
	console.log("This word is a palindrome")
} else {
	console.log("This word is not a palindrome")
}

var Stack = function () {
	this.count = 0;
	// initialize an empty object
	this.storage = {};

	// Adds a value onto to the end of the stack
	this.push = function (value) {
		this.storage[this.count] = value;
		this.count++;
	}
	// Removes and returns the value at the end of the stack
	this.pop = function () {
		if (this.count === 0) {
			return undefined;
		}
		this.count--;
		var results = this.storage[this.count];
		delete this.storage[this.count];
		return results;
	}

	this.size = function () {
		return this.count
	}

	// Returns the value at the end of the stack
	this.peek = function () {
		return this.storage[this.count - 1]
	}
}
var myStack = new Stack()

myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
myStack.push("freecodecamp")
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());