import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-form-element',
  templateUrl: './about-form-element.component.html',
  styleUrls: ['./about-form-element.component.scss']
})
export class AboutFormElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // submit() {
  //   console.log('You submit the form!');
  // }
  
  submit(login: any) {
    console.log('You submit the form!', login);
  }

}
