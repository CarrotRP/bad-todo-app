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
        `

        list.innerHTML += html;
        addListener(); //call to add the listener to the new one

        input.value = ""; //reset input
    }
    console.log(items)
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
    addListener();
}
displayItem();

//delete btn listener
function addListener() {
    //delete button
    document.querySelectorAll('.delete-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            items = items.filter((v, i) => i != index);
            displayItem(); //refresh the display
        })
    })
    //edit button
    document.querySelectorAll('.edit-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            //select list item
            var list = document.querySelector(`.i${index}`);
            console.log(list)
            //set the inner html to display input, and 2 buttons(done, cancel)
            list.innerHTML = `<input class="edit-input" type="text" value="${items[index]}"></input>
                            <button class="done-btn">Done</button>
                            <button class="cancel-btn">Cancel</button>`;
            
            //add done btn listener
            document.querySelectorAll('.done-btn').forEach((btn) => {
                btn.addEventListener('click', () => {
                    //get input tag of the target
                    const input = document.querySelector(`.i${index} input`);
                    console.log(list)
                    // input.
                    console.log(index);
                    items[index] = input.value; //change value
                    //set the innerhtml back to original
                    list.innerHTML = `<p style="display:inline;">${items[index]}</p> 
                                    <button class="delete-btn">Delete</button>
                                    <button class="edit-btn">Edit</button>`
                    //call this again to readd the listener, cuz if not it doesnt work 🗿
                    addListener();
                })
            })
            //add cancel btn listener
            document.querySelectorAll('.cancel-btn').forEach((btn) => {
                btn.addEventListener('click', () => {
                    list.innerHTML = `<p style="display:inline;">${items[index]}</p> 
                                    <button class="delete-btn">Delete</button>
                                    <button class="edit-btn">Edit</button>`;
                    addListener();
                })
            })
        })
    })
}