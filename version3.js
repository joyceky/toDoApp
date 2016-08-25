// All previous functions have been recreated as object methods

var toDoList = {
  toDos: ['item1', 'item2'],
  displayList: function() {
    console.log('My To Dos:', this.toDos);
  },
  addToDo: function(newToDo) {
    this.toDos.push(newToDo);
    this.displayList();
  },
  changeToDo: function(position, newVal) {
    this.toDos[position] = newVal;
   this.displayList();
  },
  deleteToDo: function(position) {
    this.toDos.splice(position, 1);
    this.displayList();
  }
};