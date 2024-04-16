import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDirective } from 'src/directive/drag-drop.directive';
import { CaCloudComponent } from './ca-cloud.component';



@NgModule({
  declarations: [CaCloudComponent ,DragDirective],
  imports: [
    CommonModule
  ],
  exports: [CaCloudComponent, DragDirective]
})
export class CaCloudModule { }
