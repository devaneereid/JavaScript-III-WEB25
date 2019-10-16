/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - This is the default used if no other rules apply to "this" keyword. It has a strict mode that prevents the window binding from breaking code and returns undefined.
* 2. Implicit Binding - This is the most common rule used. It only applies to objects with methods. And when the function is invoked it's referring to the left of the dot (the "this" keyword).
* 3. New Binding - Uses the new keyword creates a new object and "this" keyword points to it.
* 4. Explicit Binding - Allows us to explicitly state "this" keyword in any function.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function greet(){
    console.log(this.howdy);
}
var howdy =  'Howdy!🤠';
greet();


// Principle 2
// code example for Implicit Binding
let myDog = {
    name: 'Tessa',
    sound: 'Rufffff🐶!',
    dog: function(){
    console.log(this.sound);
  }
}
myDog.dog();


// Principle 3
// code example for New Binding
function Drink(fav){
    this.drink = fav;
}
let myFavDrink = new Drink('Diet Coke');
console.log(`My favorite drink is ${myFavDrink.drink}`);

// Principle 4
// code example for Explicit Binding
function child(){
    console.log(this.speak);
}
let myChild = {
    name: 'Brindy',
    speak: `Hey Mom!`
}
friendlyChild = child.bind(myChild);
friendlyChild();