/* Constants and variables */
// Ingredients
const burgerIngredients = [
   'Bun',
   'Cheddar',
   'Steak',
   'Pickle',
   'Ketchup',
   'Salad',
   'Tomtato',
   'Oignon',
];
// Order array
let order = [];
// Is order over boolean
let isOver = false;
// Input
const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout,
});

/* Function displaying ingredients of the chosen burger when added to the order */

function displayBurger(array) {
   console.log("\nNice, here are the burger's ingredients : \n");
   for (let i = 0; i < array.length; i++) {
      console.log(`Ingredient n° ${i + 1} : ${array[i]}`);
   }
}

/*Function displaying the whole order*/

function displayOrder(array) {
   console.log('\nGreat ! Here is your order : \n');
   for (let i = 0; i < array.length; i++) {
      console.log(`Produit n° ${i + 1} : ${array[i]}`);
   }
   console.log('\nThanks for coming ! See you next time !');
}

/* Return requested burger */
// Veggie
function veggieBurger() {
   burger = burgerIngredients.filter((data) => data !== 'steak');
   displayBurger(burger);
   order.push('Veggie Burger');
   console.log('\nHurray ! You added the Veggie Burger to your order, enjoy !\n');
}

// Vegan
function veganBurger() {
   burger = burgerIngredients.filter((data) => data !== 'steak' && data !== 'cheddar');
   displayBurger(burger);
   order.push('Vegan Burger');
   console.log('\nHurray ! You added the Vegan Burger to your order, enjoy !\n');
}
// Meat
function meatBurger() {
   burger = burgerIngredients.slice(0, 3);
   displayBurger(burger);
   order.push('Meat Burger');
   console.log('\nHurray ! You added the Meat Burger to your order, enjoy !\n');
}

// Chief
function chiefBurger() {
   burger = burgerIngredients.filter((data) => data !== 'cornichon');
   displayBurger(burger);
   order.push('Chief Burger');
   console.log('\nHurray ! You added the Chief Burger to your order, enjoy !\n');
}
// Complete
function completeBurger() {
   order.push('Complete');
   console.log('\nHurray ! You added the Complete Burger to your order, enjoy !\n');
   displayBurger(burgerIngredients);
}

/* Handle choice based on prompt input */

function handleChoice(input) {
   // If the order isn't complete yet
   if (isOver !== true) {
      switch (input) {
         case 1:
            veggieBurger();
            break;
         case 2:
            veganBurger();
            break;
         case 3:
            meatBurger();
            break;
         case 4:
            chiefBurger();
            break;
         case 5:
            completeBurger();
            break;
         default:
            console.log("I didn't understand your choice.. Please try again");
            break;
      }
      // Ask if the order is complete
      readline.question(
         '\nWant to add another burger (Type yes/no or 1/2) \n\n 1. Yes \n\n 2. No\n\nYour choice : ',
         (choice) => {
            if (choice === 'Yes' || choice === 'yes' || choice === '1') {
               isOver = false;
               getChoice();
            } else {
               isOver = true;
               displayOrder(order);
               order = [];
            }
         }
      );
   } else {
      displayOrder(order);
      order = [];
   }
}
/* Get input */

function getChoice() {
   console.log('\nWelcome to our shop ! Here you can add burgers to your order.');
   readline.question(
      '\nPlease enter your choice (eg : 1):\n\n 1. Veggie Burger \n\n 2. Vegan burger \n\n 3. Meat Burger \n\n 4. Chief Burger\n\n 5. Complete Burger \n\nYour choice : ',
      // Launch handle input function
      (input) => handleChoice(Number(input))
   );
}
/*launch function*/

getChoice();
