import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'danIel belTrÁn';
  value: number = 1000;
  obj:object = {
    name: 'danIel belTrÁn',
    value: 1000
  }


  changeName(){
    console.log(this.name);
    
  }
}
