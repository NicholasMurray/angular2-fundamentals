import {Component, Input} from "angular2/core";
import {TodoService} from "./todo-service";
import {TodoItemRenderer} from "./todo-item-renderer";
import {StartedPipe} from "./started-pipe";

@Component ({
    selector: 'todo-list',
    pipes: [StartedPipe],
    directives: [TodoItemRenderer],
    template: `<ul>
                    <li *ngFor="#todo of todoService.todos | started : status">
                        <todo-item-renderer 
                        [todo]="todo" 
                        (toggle)="todoService.toggleTodo($event)"
                        ></todo-item-renderer>
                    </li>
               </ul>`
})
export class TodoList {
    @Input() status;
    constructor(public todoService: TodoService) {}
}