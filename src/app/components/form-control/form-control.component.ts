import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-control',
  template: `
    <input type="text" value="HolaMundo" />
  `,
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
