const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaMenu = [vegetarian, hawaiian, pepperoni];
const pizzaPrice = 80;

const orderButton = document.getElementById("orderButton");
let messageBox = document.getElementById("message");


messageBox.innerHTML = `Hey! Happy to serve your pizza. On our menu we have <mark>${vegetarian}</mark>, <mark>${hawaiian}</mark> and <mark>${pepperoni}</mark>.`;


/*
// Selects all radio buttons & returns the value of the checked radio button
let userInputPizza = document.querySelectorAll(".selectPizza");

const checkRadioValue = () => {
  for (let i = 0; i < userInputPizza.length; i++) {
    if (userInputPizza[i].checked) {
      return userInputPizza[i].value;
    }
  }
  return false;
}
*/

/*
// Check that order quantity is a number between 1 – 10
const checkNumberValue = (orderQuantity) => {
  if (Number.isNaN(+orderQuantity) || +orderQuantity === 0 || +orderQuantity > 10) {
    return true;
  }
};
*/

// Returns true if the ordered pizza matches with the menu
const checkOrderName = (orderName) => {
  for (let i = 0; i < pizzaMenu.length; i++) {
    if (pizzaMenu[i].toLowerCase() === orderName.toLowerCase()) {
      return true;
    }
  }
  return false;
};

// Calculates total ammount bhy multiplying quantity with price
const totalCost = (orderQuantity) => {
  return pizzaPrice * +orderQuantity;
};

// Calculates the cooking time based on how many pizzas was ordered
const cookingTime = (orderQuantity) => {
  if (+orderQuantity <= 2) {
    return 10;
  } else if (+orderQuantity < 6) {
    return 15;
  } else {
    return 20;
  }
};

// Runs when order button is clicked
const buttonClicked = () => {
  let orderName = document.getElementById("pizzaTypeChoice").value;
  let orderQuantity = document.getElementById("pizzaQuantityChoice").value;

  if (checkOrderName(orderName) === true && orderQuantity < 11) {

    // Adds an ending to the variable if quantity is more than 1
    if (orderQuantity >= 2) orderName = `${orderName}s`;

    messageBox.innerHTML = `Great, I'll get started on your <mark>${orderName}</mark> right away, it will cost <mark>${totalCost(orderQuantity)} kr</mark>. Your pizza will take <mark>${cookingTime(orderQuantity)} minutes</mark> to prepare.`;
    document.getElementById("orderForm").style.display = "none";
  } else {
    messageBox.innerHTML = "Select a pizza from the menu & a number between 1 & 10";
  }
};

orderButton.addEventListener("mousedown", buttonClicked);


/*
TODO:
- Add something to the radio buttons
- Different error messages depending on which input
*/