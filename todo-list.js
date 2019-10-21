class ToDoList {
	constructor(toDo) {
		this.id = toDo.id;
		this.title = toDo.title;
		this.tasksArray = toDo.tasksArray || [];
		this.urgent = toDo.urgent || false;
	}

	saveToStorage(allIdeas) {
		localStorage.setItem("globalStorage", JSON.stringify(allIdeas));
	}

	deleteFromStorage(allIdeas) {
		var listId = this.id;
		var index = allIdeas.findIndex(function (list) {
			return parseInt(list.id) === listId;
		});

		allIdeas.splice(index, 1);
		this.saveToStorage(allIdeas);
	}

	updateToDo(allIdeas) {
		this.urgent = !this.urgent;
		this.saveToStorage(allIdeas);
	}

	updateTask() {
	}
}