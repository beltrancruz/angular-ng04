import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: Hero[], orderBy: string = 'not'):Hero[] {
    switch (orderBy) {
      case 'color': return value.sort((a,b)=>(a.color > b.color)?1:-1);
      case 'fly': return value.sort((a,b)=>(a.canfly < b.canfly)?1:-1);
      case 'name': return value.sort((a,b)=>(a.name > b.name)?1:-1);
      default: return value;
    }
  }

}
