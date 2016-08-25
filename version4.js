// Add a completed boolean and change toDos to array of objects

var toDoList = {
  toDos: [],
  displayList: function() {
    console.log('My To Dos:', this.toDos);
  },
  addToDo: function(toDoText) {
    this.toDos.push({
      toDoText: toDoText,
      completed: false
    });
    this.displayList();
  },
  changeToDo: function(position, toDoText) {
    this.toDos[position].toDoText = toDoText;
    this.displayList();
  },
  deleteToDo: function(position) {
    this.toDos.splice(position, 1);
    this.displayList();
  },
  toggleCompleted: function(position) {
    var toDo = this.toDos[position];
    toDo.completed = !toDo.completed;
    this.displayList();
  }
};