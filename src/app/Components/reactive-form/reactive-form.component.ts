import { group } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userRegisterForm: FormGroup;

  constructor(private fb: FormBuilder){
    // this.userRegisterForm = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required , Validators.pattern('^[a-zAZ]{3,10}@(gmail|hotmail)(.com)$')]),
    //   password: new FormControl(''),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     stNumber: new FormControl('')
    //   }),
    //   phones: new FormArray([new FormControl('')])
    // })

    this.userRegisterForm = this.fb.group({
      name: fb.control('' , [Validators.required]),
      email: fb.control('', [Validators.required , Validators.pattern('^[a-zAZ]{3,10}@(gmail|hotmail)(.com)$')]),
      password: fb.control(''),
      address: fb.group({
        city: fb.control(''),
        stNumber: fb.control('')
      }),
      phones: fb.array([fb.control('')])
    })
  }
  
  get getName(){
    return this.userRegisterForm.get('name');
  }

  get getEmail(){
    return this.userRegisterForm.get('email');
  }

  get getPhones (){
    return this.userRegisterForm.get('phones') as FormArray
  }

  addNewPhone(){
    this.getPhones.push(new FormControl(''))
  }

  onSubmit(){}

}
