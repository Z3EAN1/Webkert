import { Component, OnInit } from '@angular/core';
import { SelectServiceService } from '../../services/select-service.service';
import {Healtcareservice} from '../../models/healtcareservice';
import { AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {
  healtcaresevices! : Healtcareservice[];

  constructor(public healtcareserviceService: SelectServiceService,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.healtcareserviceService.getHealtcareservice().subscribe(healtcaresevices => {
      console.log(healtcaresevices);
      this.healtcaresevices = healtcaresevices;
    } )
  }

}
