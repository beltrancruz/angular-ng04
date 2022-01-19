import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  nameLower: string = "gregory";
  nameUpper: string = "GREGORY";
  nameComplete: string = "gReGoRy";
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
