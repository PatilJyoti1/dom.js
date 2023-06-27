// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);


// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText=  'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';

//var addItemsHeading = document.getElementById('add-items-heading');

// Apply styles to the heading
//addItemsHeading.style.fontWeight = 'bold';
//addItemsHeading.style.color = 'green';


// GET ELEMENTBYCLASS//
// Select the third list item and change its background color to green
//var thirdListItem = document.getElementById('items').getElementsByTagName('li')[2];
//thirdListItem.style.backgroundColor = 'green';

// Select all list items and make their font weight bold
//var listItems = document.getElementById('items').getElementsByTagName('li');
//for (var i = 0; i < listItems.length; i++) {
  //listItems[i].style.fontWeight = 'bold';
//}



// Add a new li element without the same class name
//var newItem = document.createElement('li');
//newItem.textContent = 'Item 5';
//newItem.classList.add('list-group-item'); // Add the necessary class

//var itemList = document.getElementById('items');
//itemList.appendChild(newItem);

// Edit the new li element using getElementsByClassName
//var listItemsByClassName = document.getElementsByClassName('list-group-item');
//listItemsByClassName[listItemsByClassName.length - 1].style.backgroundColor = 'green';

// Edit the new li element using getElementsByTagName
//var listItemsByTagName = document.getElementsByTagName('li');
//listItemsByTagName[listItemsByTagName.length - 1].style.fontWeight = 'bold';



// Change font color to green for the 2nd item in the item list
//var secondItem = document.querySelector("#items li:nth-child(2)");
//secondItem.style.color = "green";

// Select all odd elements and make their background green
//var oddItems = document.querySelectorAll("#items li:nth-child(odd)");
//oddItems.forEach(function(item) {
 // item.style.backgroundColor = "green";
//});

//TRAVERSING THE DOM//
var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parenElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);


// childnode
//console.log(itemList.childNodes);


//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

//Firstchild
//console.log(itemList.firstChild);
//firstelemenuchild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello 1';

//Lastchild
//console.log(itemList.lastchild);
//lastelemenuchild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello 4';

//nextsibling
//console.log(itemList.nextSibling);
//nextelementsibling
//console.log(itemList.nextElementSibling);

//priveousSibling
//console.log(itemList.previousSibling);
//priveousnextsibiling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

//create elements



//create a div
//var newDiv = document.createElement('div');

//add class
//newDiv.className= 'hello';

//Add id
//newDiv.id = 'hello1';

//add attr
//newDiv.setAttribute('title', 'Hello Div');

//create a text node
//var newDivText = document.createTextNode('Hello World');

//add text to div
//newDiv.appendChild(newDivText);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');

//console.log(newDiv);

//newDiv.style.fontSize = '30px';

//container.insertBefore(newDiv, h1);

// Adding "Hello" before "Item Lister"
var headerTitle = document.getElementById('header-title');
headerTitle.innerText = 'Hello ' + headerTitle.innerText;

// Adding "Hello" before "Item 1"
var item1 = document.querySelector('#items li:nth-child(1)');
var helloDiv = document.createElement('div');
helloDiv.innerText = 'Hello Item 1';
item1.parentNode.insertBefore(helloDiv, item1);


