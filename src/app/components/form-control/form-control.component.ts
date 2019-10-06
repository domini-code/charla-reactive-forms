import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  template: `
    <input type="text" [formControl]="user" />
    <p>Value: {{ user.value }}</p>
  `,
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  user = new FormControl('HolaMundito');
  constructor() {}

  ngOnInit() {}
}
