import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'angular-todo-list';
  name: string = 'Jonny Lutz'
  constructor() {
    this.name ='Bob'
    this.changeName('John')
  }

  changeName(name:string){
    this.name = name
  }
}
