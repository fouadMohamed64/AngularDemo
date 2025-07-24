import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { IntegrationAPIService } from '../../Services/integration-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-drieven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-drieven-form.component.html',
  styleUrl: './template-drieven-form.component.css'
})
export class TemplateDrievenFormComponent {

  constructor(private integrationAPIService: IntegrationAPIService, private router:Router ){}

  product:Iproduct = {} as Iproduct;

  onSubmit(myForm: NgForm){
    myForm.resetForm()
    this.router.navigate(['/home'])
    // this.integrationAPIService.create(this.product).subscribe((data)=>{
    //   // console.log(data)
    // })
  }

}
