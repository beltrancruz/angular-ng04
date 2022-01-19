import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent implements OnInit {

  sales: number = 2652653656.165415614;
  percent: number = 0.48;
  

  constructor() { }

  ngOnInit(): void {
  }

}
