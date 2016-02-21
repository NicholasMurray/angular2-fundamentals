import {Component, Inject} from "angular2/core";
import {TodoService} from "./todo-service";

@Component ({
    selector: "todo-input",
    template: `<form (submit)="onSubmit()">
                    <input type="text" [(ngModel)]="todoModel" />
                </form>`
})

export class TodoInput{
    todoModel;
    
    constructor(public todoService: TodoService){
    }
    
    onSubmit(value) {
        this.todoService.todos.push(this.todoModel)
        console.log(this.todoService.todos);
    }
};



