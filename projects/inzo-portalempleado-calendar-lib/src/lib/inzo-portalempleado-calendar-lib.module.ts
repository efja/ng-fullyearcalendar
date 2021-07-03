import { NgModule } from '@angular/core';
import { InzoPortalempleadoCalendarComponent } from './inzo-portalempleado-calendar-lib.component';
import { MonthlyCalendarModule } from './month-calendar/monthly-calendar.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InzoPortalempleadoCalendarComponent],
  imports: [
    CommonModule,
    MonthlyCalendarModule
  ],
  exports: [InzoPortalempleadoCalendarComponent]
})
export class InzoPortalempleadoCalendarModule { }
