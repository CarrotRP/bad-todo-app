var input = document.querySelector(".chore")
var addBtn = document.querySelector(".add")
var list = document.querySelector('.list') //where list will display
var count = document.querySelector('.item-count');

let items = ["dawg", "cat", 'burd'];
let html = '';

//enter key listener
input.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        addBtn.click();
    }
})

//add item to the list
addBtn.addEventListener('click', () => {

    if (input.value != "") {
        items.push(input.value);

        html = `
        <li class="i${items.length - 1}">
            <p style="display:inline;">${input.value}</p> 
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        </li>
        `;

        list.innerHTML += html;
        input.value = ""; //reset input
    }
})

//display item from list, if there are any
//if db were to implemented, display all items
function displayItem() {
    let html = '';
    items.forEach((i, index) => {
        html += `
        <li class="i${index}">
            <p style="display:inline;">${i}</p> 
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        </li>
        `
    })
    list.innerHTML = html;
}
displayItem();

//event delegation
list.addEventListener('click', (e) => {

    //selecting the parent
    var li = e.target.closest('li');
    //get index from the class name, (class = "i1");
    var index = li.className.replace('i', '');

    if (e.target.matches('.delete-btn')) {
        items = items.filter((value, i) => i != index);
        displayItem();
    }

    if (e.target.matches('.edit-btn')) {
        li.innerHTML = `<input class="edit-input" type="text" value="${items[index]}"></input>
                        <button class="done-btn">Done</button>
                        <button class="cancel-btn">Cancel</button>`;
    }

    if (e.target.matches('.done-btn')) {
        items[index] = e.target.previousElementSibling.value;
        li.innerHTML = `
            <li class="i${index}">
                <p style="display:inline;">${items[index]}</p> 
                <button class="delete-btn">Delete</button>
                <button class="edit-btn">Edit</button>
            </li>
            `;
    }

    if (e.target.matches('.cancel-btn')) {
        li.innerHTML = `
        <li class="i${index}">
            <p style="display:inline;">${items[index]}</p> 
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        </li>
        `;
    }
})
//listener for keydown (event delegation);
list.addEventListener('keydown', e => {
    //selecting the parent
    var li = e.target.closest('li');
    //get index from the class name, (class = "i1");
    var index = li.className.replace('i', '');

    if(e.key == "Enter"){
        items[index] = e.target.value;
        li.innerHTML = `
            <li class="i${index}">
                <p style="display:inline;">${items[index]}</p> 
                <button class="delete-btn">Delete</button>
                <button class="edit-btn">Edit</button>
            </li>
            `;
    }
})