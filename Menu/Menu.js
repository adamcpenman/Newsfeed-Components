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
let menuContainer = document.querySelector('.header');
let menuBtn = document.querySelector('.menu-button');

menuContainer.appendChild(menuSelector(menuItems));

function menuSelector(list){

  const menuDiv = document.createElement('div');
   menuDiv.classList.add('menu');
  const ulList = document.createElement('ul');
    menuDiv.appendChild(ulList)

    menuItems.forEach((items) => {
      const liItems = document.createElement('li');
      ulList.appendChild(liItems);
      liItems.textContent = items;
      
    });

    //  array.forEach((items) => {
    //   let liItems = document.createElement('li');
    //   ulList.appendChild(liItems);
    //   ulItems.textContent = items;


menuBtn.addEventListener('click', () => menuDiv.classList.toggle('menu--open'));


  return menuDiv;

}

// const moreData = data.map(item => {
//    return articleCreator(item.title, item.date, item.firstParagraph, item.secondParagraph, item.thirdParagraph);
// })
// moreData.forEach((allData) => {
// container.appendChild(allData)
// })
//  console.log(moreData);

// const moreMenu = menuItems.map(item => {
//   return menuSelector();
// })

// moreMenu.forEach((allMenu) => {
//   menuContainer.appendChild(allMenu)
// })


// menuContainer.appendChild(menuSelector(menuItems));

// const mBtn = document.querySelector('.menu-button');
// mBtn.addEventListener('click', () => mBtn.classList.toggle('menu--open'));
// console.log(mBtn, "button")
// menuDiv.addEventListener('click', () => ulList.classList.toggle('article-open'));



console.log(menuSelector(),'menuSelector function');
