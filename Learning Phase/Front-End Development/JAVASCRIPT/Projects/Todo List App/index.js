let inputValue = document.getElementById("inputValue");
let addTodoButton = document.getElementById("addTodoButton");
let errorPara = document.getElementById("errorPara");
let todoUlElement = document.getElementById("todoUlElement");

addTodoButton.addEventListener("click", function () {
  if (inputValue.value == "") {
    errorPara.innerText = "Warning! Enter Todo First";
  } else {
    let liElement = `<li class="list-group-item d-flex align-items-center fontSizeList">
    <span class="w-75"> ${inputValue.value}</span>
        <button onclick="editTodoFunction(this)" class="btn btn-warning me-2" type="button"><span
                class="fontSize">Edit</span></button>
        <button onclick="deleteTodoFunction(this)" class="btn btn-danger" type="button"><span
                class="fontSize">Delete</span></button>
</li>`;
    todoUlElement.innerHTML += liElement;
    inputValue.value = '';
  }
});

function editTodoFunction(element) {
    // console.log("Clicked-->" ,  element.previousElementSibling.innerText);
    let updatedUserInput = prompt("Enter Updated Value", inputValue.value)
    // console.log(updatedUserInput);
    element.previousElementSibling.innerText = updatedUserInput
    // addTodoButton.innerText = "Update Todo"

}
function deleteTodoFunction(element) {
    element.parentElement.remove()
}