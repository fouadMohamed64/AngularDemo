import { Component, OnInit } from '@angular/core';
import { IntegrationAPIService } from '../../Services/integration-api.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {

  allComments:any[] = [];

  constructor(private integrationAPIService: IntegrationAPIService){}


  ngOnInit() {
    this.integrationAPIService.getAll('/comments').subscribe((data:any)=>{
      this.allComments = data;
      console.log(data);
    })
  }

  

}
