import { Component, OnInit } from '@angular/core';
import { HealtcareserviveService } from '../../services/healtcareservive.service';
import {Healtcareservice} from '../../models/healtcareservice';
import { AngularFirestore} from 'angularfire2/firestore';


@Component({
  selector: 'app-healtcareservices',
  templateUrl: './healtcareservices.component.html',
  styleUrls: ['./healtcareservices.component.scss'],
})
export class HealtcareservicesComponent implements OnInit {
  healtcaresevices! : Healtcareservice[];
  editState: boolean = false;
  serviceToEdit!: Healtcareservice;

  constructor(public healtcareserviceService: HealtcareserviveService,
    private firestore: AngularFirestore) {
    
   }

  ngOnInit(): void {
    this.healtcareserviceService.getHealtcareservice().subscribe(healtcaresevices => {
      console.log(healtcaresevices);
      this.healtcaresevices = healtcaresevices;
    } )
  }
  /*Törlés*/
  onDelete(event : Event, healtcaresevice : Healtcareservice){
    this.healtcareserviceService.deleteService(healtcaresevice);
    console.log(healtcaresevice.id);
  
  }
  onEdit(event : Event, healtcaresevice : Healtcareservice){
    this.editState = true;
    this.serviceToEdit = healtcaresevice;

  }
  /*Módosítás*/
  onUpdate(event : Event, healtcareservice : Healtcareservice){
    this.healtcareserviceService.updateService(healtcareservice);
    /*nem módosítottunk*/
    this.clearState();

  }
  /*Ha mégse módosítanánk*/
  clearState(){
    this.editState = false;
  }


}
