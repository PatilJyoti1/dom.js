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
var newItem = document.createElement('li');
newItem.textContent = 'Item 5';
newItem.classList.add('list-group-item'); // Add the necessary class

var itemList = document.getElementById('items');
itemList.appendChild(newItem);

// Edit the new li element using getElementsByClassName
var listItemsByClassName = document.getElementsByClassName('list-group-item');
listItemsByClassName[listItemsByClassName.length - 1].style.backgroundColor = 'green';

// Edit the new li element using getElementsByTagName
var listItemsByTagName = document.getElementsByTagName('li');
listItemsByTagName[listItemsByTagName.length - 1].style.fontWeight = 'bold';






