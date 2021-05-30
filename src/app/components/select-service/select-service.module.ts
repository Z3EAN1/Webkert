import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectServiceComponent} from '../select-service/select-service.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [SelectServiceComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule
  ],
  exports:[SelectServiceComponent]
})
export class SelectServiceModule { }
