import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upper'
})
export class UpperPipe implements PipeTransform{
    transform(value:string, toupper:boolean = true):string {
        return toupper?value.toUpperCase():value.toLocaleLowerCase();
    }
}