import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  myForm: FormGroup;
  constructor() {}
  // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:

  myRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$';

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('Bezael', Validators.required),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.pattern(this.myRegex))
    });
  }

  onSave({ value, valid }) {
    console.warn(value, valid);
  }
}
