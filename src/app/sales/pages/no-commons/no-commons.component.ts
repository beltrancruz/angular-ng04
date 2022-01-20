import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {
  // i18nSelect
  name: string = 'Fernando';
  sex: string = 'male';

  selectMapping = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changePerson(){
    this.sex = this.sex === 'male' ? 'female' : 'male';
    this.name = this.sex === 'male' ? 'Fernando' : 'Sarah' ;
  }

  // i18nPlural
  customers: string[] = ['Alex', 'Aaron', 'Ginger'];
  
  pluralMapping = {
    '=0':' no tenemos ningún cliente esperando.',
    '=1':' tenemos 1 cliente esperando.',
    'other':' tenemos # clientes esperando.'
  }

  serve(){
    if(this.customers.length === 0){
      this.customers = ['Alex', 'Aaron', 'Ginger'];
    }else{
      this.customers.shift();
    }
  }

  // KeyValuePipe
  person = {
    name: 'Daniel',
    age: 22,
    address: 'Ottawa, Canada.'
  }


  // Json Pipe
  heros = [
    {
      name: 'Superman',
      canfly: true
    },
    {
      name: 'Robin',
      canfly: false
    },
    {
      name: 'Aquaman',
      canfly: true
    }
  ];
  

  
  // Async Pipe
  myobservable = interval(1000);
  mypromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Data complete!')
    },3500)
  })

}
