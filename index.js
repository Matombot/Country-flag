
const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];

const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

const countryList = document.querySelector(".countryList")
const addFlag = document.querySelector(".addFlag")
const countries_name = document.querySelector(".countries_name")
document.querySelector('.list').innerHTML = fruitNames;
document.querySelector('.lists').innerHTML = fruits

// let countries_flag = countries.map(function(element){
//    return `${element.countries}`;
//})

      const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const fruitList = document.querySelector('fruitList');
      const button = document.querySelector('button');

    button.onclick = function() {
        let myItem = input.value;
        input.value = '';

       // fruitList.addEventListener('click', function(){
        //  let myItem = input.value;
        //input.value ='';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        

        listItem.appendChild(listText);
        listText.textContent = myItem;
        list.appendChild(listItem);

        input.focus();
      }
      

//let element = document.createElement(fruitNames[fruits, options]);

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}


//function showCountriesList () {
  //  var countriesList = [];
  //  var countrylist = countries.split(",");
//for (var i = 0; i< countrylist.length; i++){
   //     if(countrylist.startsWith(flags)){  
   //         countriesList.push(countrylist);

//}

   // return countriesList;
//}}add

