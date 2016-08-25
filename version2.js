
//Create array to hold to do list
var toDos = ['item1','item2'];

//This function displays the to do list
function displayToDos() {
console.log('My To Dos:', toDos);
}

//This function adds a new to do to the end of the list
function addToDo(newToDo) {
toDos.push(newToDo);
displayToDos();
}

//This function changed the value of a to do at the specified position
function changeToDo(position, newVal) {
toDos[position] = newVal;
displayToDos();
}

//This funtion deletes the to do at a specified position
function deleteToDo(position){
toDos.splice(position, 1);
displayToDos();
}