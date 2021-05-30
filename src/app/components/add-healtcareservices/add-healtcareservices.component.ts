import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { HealtcareserviveService } from '../../services/healtcareservive.service';
import { Healtcareservice } from 'src/app/models/healtcareservice';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-add-healtcareservices',
  templateUrl: './add-healtcareservices.component.html',
  styleUrls: ['./add-healtcareservices.component.scss']
})
export class AddHealtcareservicesComponent implements OnInit {
  service: Healtcareservice= {
    name : '',
    category :'',
    comment: '',
    extraDetail :'',
    id: ''
  }

  healtcaresevices! : Healtcareservice[];
  dialog: any;
  constructor(public healtcareserviceService: HealtcareserviveService,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

/*Hozzáadunk egy új elemet a colleciton-hoz */
  add(){
    this.healtcareserviceService.add(this.service);
    this.service.name = '';
     this.service.category ='';
     this.service.comment ='';
     this.service.extraDetail='';

}

}
