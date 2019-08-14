/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

//Creating variables

const menuHeader = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-button')
const menuBody = document.querySelector('body');

menuHeader.appendChild(menuSelector(menuItems));

//Creating a function
function menuSelector() {

  //creating elements in function
const menuDiv = document.createElement('div');
const menuUl = document.createElement('ul');
//creating classes
menuDiv.classList.add('menu')
//appending 
menuDiv.appendChild(menuUl);

//looping for the data in menuItems
menuItems.forEach((items) => {
  const menuLi = document.createElement('li');
  menuUl.appendChild(menuLi);
  menuLi.textContent = items;
  menuLi.addEventListener('mouseover', (event) => {
    event.currentTarget.style.cursor = "pointer";
    })
  menuLi.addEventListener('click', (event) => {
    event.currentTarget.style.color = 'red';
  })
});

menuBtn.addEventListener('click', (event) => {
  menuDiv.classList.toggle('menu--open');
})



return menuDiv
}

console.log(menuSelector());
//creating variables
// let menuContainer = document.querySelector('.header');
// let menuBtn = document.querySelector('.menu-button');
// let menuB = document.querySelector('body');

 

// //creating function 
// function menuSelector(array){

//   const menuDiv = document.createElement('div');
//    menuDiv.classList.add('menu');
//   const ulItems = document.createElement('ul');
//     menuDiv.appendChild(ulItems);

//     menuItems.forEach((items) => {
//       const liItems = document.createElement('li');
//       ulItems.appendChild(liItems);
//       liItems.textContent = items;
      
//     });

// menuBtn.addEventListener('click', (event) => { menuDiv.classList.toggle('menu--open')
// });


//   return menuDiv;

// }

// //appending header to function
// menuContainer.appendChild(menuSelector(menuItems));



// console.log(menuSelector(),'menuSelector function');

