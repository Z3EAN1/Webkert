import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavBarComponent } from './nav-bar.component';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule { }
