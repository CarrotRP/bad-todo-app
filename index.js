//need search func
const button = document.querySelector("#btn")
let todo = document.querySelector("#chores")
let delBtns = document.querySelectorAll(".delbtn");

let lis;
let delBtn;
let editBtn;
let done;

document.addEventListener("DOMContentLoaded", () => {
    button.addEventListener("click", () => {

        addToList();

        editBtn.addEventListener("click", () => {
            done = document.createElement("button");
            done.innerHTML = "done";
            const editor = document.createElement("input");
            editor.value = lis.innerHTML.slice(0, lis.innerHTML.indexOf("<"));
            lis.innerHTML = " ";
            lis.prepend(editor);
            lis.appendChild(done);

            done.addEventListener("click", () => {
                console.log("hello");
                if(editor.value != ""){
                    lis.innerHTML = editor.value;
                    lis.appendChild(delBtn);
                    lis.appendChild(editBtn);
                }
            });
        })

    })
})
function addToList() {
    lis = document.createElement("li");
    delBtn = document.createElement("button");
    editBtn = document.createElement("button");
    delBtn.innerHTML = "del";
    delBtn.classList = "delbtn";
    editBtn.innerHTML = "edit";
    editBtn.classList = "editbtn";

    if (todo.value != "") {
        lis.innerHTML = todo.value;
        document.querySelector(".todoList").appendChild(lis);
        lis.appendChild(delBtn);
        lis.appendChild(editBtn);
    }
    delBtn.addEventListener("click", () => {
        lis.remove();
    })
    todo.value = "";
}