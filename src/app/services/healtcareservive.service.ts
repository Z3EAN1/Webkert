import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable} from 'rxjs';

import { Healtcareservice } from '../models/healtcareservice';
import { map } from 'rxjs/operators/map';


@Injectable({
  providedIn: 'root'
})
export class HealtcareserviveService {
  healtcareserviceCollection! : AngularFirestoreCollection<Healtcareservice>;
  healtcareservices: Observable<Healtcareservice[]>;
  healtcareservicesDoc! : AngularFirestoreDocument<Healtcareservice>;
  
  

  constructor(public afs: AngularFirestore) {
    /*Rendezzuk a collection-t név oszlop szerint növekvő sorrendbe */
    this.healtcareserviceCollection = this.afs.collection('healtcareservices', ref => ref.orderBy('name', 'asc'));
    /*Atadjuk a fb id a mi id-nak */
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

   deleteService(healtcareservice : Healtcareservice){
     /*torles a collection-ből*/
    this.healtcareservicesDoc = this.afs.collection('healtcareservices').doc(healtcareservice.id);
    this.healtcareservicesDoc.delete();
    console.log(healtcareservice.id);
   }

   updateService(healtcareservice : Healtcareservice){
     /*modositas a collection-ban*/
    this.healtcareservicesDoc = this.afs.collection('healtcareservices').doc(healtcareservice.id);
    this.healtcareservicesDoc.update(healtcareservice);
   }

  add(healtcareservice: Healtcareservice){
    /*hozzaadunk a collection-hoz */
    this.healtcareserviceCollection.add(healtcareservice);
  }
 
}
