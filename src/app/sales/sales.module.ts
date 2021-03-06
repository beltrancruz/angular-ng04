import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderesComponent } from './pages/orderes/orderes.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UpperPipe } from './pipes/upper.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';
@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderesComponent,
    UpperPipe,
    FlyPipe,
    OrderPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderesComponent
  ]
})
export class SalesModule { }
