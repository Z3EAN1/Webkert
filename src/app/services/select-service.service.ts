import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable} from 'rxjs';

import { Healtcareservice } from '../models/healtcareservice';
import { map } from 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class SelectServiceService {
  healtcareserviceCollection! : AngularFirestoreCollection<Healtcareservice>;
  healtcareservices!: Observable<Healtcareservice[]>;


  constructor(public afs: AngularFirestore) {
    /*Kiválasztjuk azokat a sorokat amiknek a category-ja megegyezik a 'Fogszabályzás'-sal */
    this.healtcareserviceCollection = this.afs.collection('healtcareservices', ref => ref.where('category', '==', 'Fogszabályzás'));
    this.healtcareservices = this.afs.collection('healtcareservices').snapshotChanges().pipe(map((changes : any) => {
      return changes.map((a: any) => {
        const data = a.payload.doc.data() as Healtcareservice;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getHealtcareservice(){
    return this.healtcareservices;
   }

}

