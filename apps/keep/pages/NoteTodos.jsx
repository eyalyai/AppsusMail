import { utilService } from "../services/util.service.js"
import { storageService } from "../services/storage-service.js"

export class NoteTodos extends React.Component {

    // state = {
    //     gTodos: null,
    //     FilterBy: 'all',
    //     FilterSortBy = 'created',

    // }
    // KEY = 'todosDB';
    // gTodos;
    // _createTodos();

    // getTodosForDisplay() {
    //     if (gFilterBy === 'all') return gTodos;
    //     var todos = gTodos.filter(function (todo) {
    //         return todo.isDone && gFilterBy === 'done' ||
    //             !todo.isDone && gFilterBy === 'active'

    //     })
    //     return todos;
    // }


    // getTotalCount() {
    //     return gTodos.length;
    // }
    // getActiveCount() {
    //     var todos = gTodos.filter(function (todo) {
    //         return !todo.isDone;
    //     })
    //     return todos.length;
    // }
    // removeTodo(todoId) {
    //     var idx = gTodos.findIndex(function (todo) {
    //         return todo.id === todoId
    //     })
    //     gTodos.splice(idx, 1);
    //     storageService.saveToStorage();
    // }

    // toggleTodo(todoId) {
    //     var todo = gTodos.find(function (todo) {
    //         return todo.id === todoId
    //     })
    //     todo.isDone = !todo.isDone;
    //     storageService.saveToStorage()
    // }

    // addTodo(txt) {
    //     var todo = _createTodo(txt);
    //     gTodos.unshift(todo);
    //     storageService.saveToStorage()
    // }


    // setFilter(filterBy) {
    //     gFilterBy = filterBy
    //     onCheckTodoState(gFilterBy);
    // }



    // setFilterSort(filterBy) {
    //     gFilterSortBy = filterBy
    //     sortList(gFilterSortBy);
    // }

    // sortList(filterBy) {
    //     switch (filterBy) {
    //         case 'alphaOrder': gTodos.sort((a, b) => a.txt.localeCompare(b.txt));
    //             break;
    //         case 'created': gTodos.sort((a, b) => a.createdAt - b.createdAt);
    //             break;
    //         case 'importance': gTodos.sort((a, b) => a.importance - b.importance);
    //     }
    // }




    // _createTodos() {
    //     var todos = storageService.loadFromStorage(KEY)
    //     if (!todos || todos.length === 0) {
    //         var todos = [
    //             _createTodo('Study HTML'),
    //             _createTodo('Learn CSS'),
    //             _createTodo('Master Javascript')
    //         ];
    //     }
    //     gTodos = todos;
    //     storageService.saveToStorage();
    // }

    // _createTodo(txt) {
    //     var todo = {
    //         id: utilService.makeId(),
    //         txt,
    //         isDone: false,
    //         createdAt: Date.now(),
    //         importance: utilService.getRandomIntInclusive(1, 5)
    //     }
    //     return todo;
    // }

    render() {

        return (
            <div>
                <h3>hello NoteTodos</h3>


            </div>
        )
    }
}












