import {Component} from "angular2/core";
import {TodoService} from "./todo-service";

@Component ({
    selector: 'todo-list',
    template: `<ul>
                    <li *ngFor="#todo of todoService.todos">
                        <span [hidden]="todo.status == 'completed'">{{todo.title}}</span>
                        <button (click)="todo.toggle()">Toggle</button>
                    </li>
               </ul>`
})
export class TodoList {
    constructor(public todoService: TodoService) {}
}