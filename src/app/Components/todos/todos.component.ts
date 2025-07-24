import { Component, OnInit } from '@angular/core';
import { IntegrationAPIService } from '../../Services/integration-api.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  allTodos:any[] = [];

  constructor(private integrationAPIService: IntegrationAPIService){}


  ngOnInit() {
    // this.integrationAPIService.getAll('todos').pipe(take(10)).subscribe((todos:any)=>{
    this.integrationAPIService.getAll('todos').subscribe((todos:any)=>{
      this.allTodos = todos.slice(0, 10)
      console.log(todos);
    })
  }



}
