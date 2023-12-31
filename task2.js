// Add item
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
  
    // Create delete button element
    var deleteBtn = document.createElement('button');
    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node to delete button
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append delete button to li
    li.appendChild(deleteBtn);
  
    // Create edit button element
    var editBtn = document.createElement('button');
    // Add classes to edit button
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    // Append text node to edit button
    editBtn.appendChild(document.createTextNode('Edit'));
    // Append edit button to li
    li.appendChild(editBtn);
  
    // Append li to list
    itemList.appendChild(li);
  }
  
  // Remove item
  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
  
  
  