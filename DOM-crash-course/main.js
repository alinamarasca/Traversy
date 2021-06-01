let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault(); // cancel normal submition of the form
    // console.log(1); //just try that it works
    
    let newItem = document.getElementById('item').value;
    // create new li element
    let li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // console.log(li);
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create delete button element
    let deleteBtn = document.createElement('button');
    //  add classes to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);
}

// remove item
function removeItem(e){
    // console.log(1)
    // need to work when only press the button not the item
    if(e.target.classList.contains('delete')){
        // console.log(2);
        if(confirm('Are you sure?')){
             let li = e.target.parentElement; //button is in the li -> li is parent -> when press button, get it's parent
             itemList.removeChild(li); // in itemList remove it's child <-li is the child of itemList(ul)
        }
    }
}

// filter items
function filterItems(e){
    // converts to lowercase
    let text = e.target.value.toLowerCase();
    console.log(text);
    let items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) !=-1){//if it is not(!) not in the list
        item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}