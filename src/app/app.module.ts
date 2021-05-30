import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from 'src/environments/environment';
import { HealtcareservicesComponent } from './components/healtcareservices/healtcareservices.component';
import { HealtcareserviveService} from './services/healtcareservive.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { HealtcareservicesModule } from './components/healtcareservices/healtcareservices.module';
import { SelectServiceModule } from './components/select-service/select-service.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angularfs'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HealtcareservicesModule,
    NavBarModule,
    SelectServiceModule
 

  ],
  providers: [HealtcareserviveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
