import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { TimeTransformPipe } from './pipes/time-transform.pipe';
import { DateTransformPipe } from './pipes/date-transform.pipe';



@NgModule({
  declarations: [EllipsisPipe, TimeTransformPipe, DateTransformPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
