/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is the default.  If "this" is not attached to something else, it will attach to window binding.  It would return a value of undefined.
* 2. implicit binding is automatic, and it tells "this" that it is refering to what is left of the dot
* 3. explicit binding is telling "this" what it is to refer to by using .call
* 4. new binding constructs a new object "this" then points to the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
let myDog = {
    name: "angel",
    breed: "lab",
    age: 5,
    speak: function () {
        console.log(`My name is ${this.name}.  I am a ${this.breed}. I am ${this.age} years old.`);
    }
}
myDog.speak();

// Principle 3

// code example for New Binding
function favActivity(activity) {
    this.activity = activity;
}

let myFavActivity = new favActivity('My favorite activity is walking');
console.log(myFavActivity.activity);
// Principle 4

// code example for Explicit Binding

function hello() {
    console.log(this.greeting);
}

let myHello = {
    name: 'Jen',
    greeting: "Hello, my name is Jen"
}

hello.call(myHello);