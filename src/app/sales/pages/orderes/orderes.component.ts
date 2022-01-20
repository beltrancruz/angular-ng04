import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-orderes',
  templateUrl: './orderes.component.html',
  styles: [
  ]
})
export class OrderesComponent {
  flag: boolean = true;
  heros: Hero[] = [
    {
      name:'Superman',
      canfly: true,
      color: Color.blue
    },
    {
      name:'Batman',
      canfly: false,
      color: Color.black
    },
    {
      name:'Robin',
      canfly: false,
      color: Color.green
    },
    {
      name:'Daredevil',
      canfly: false,
      color: Color.red
    },
    {
      name:'Green Lantern',
      canfly: true,
      color: Color.green
    },
  ]
  orderBy: string = '';

  change(){
    this.flag = !this.flag;
  }

  changeOrder(value:string):void{
    this.orderBy = value;
  }


}
