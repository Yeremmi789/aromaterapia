import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection , collectionData, doc, deleteDoc, setDoc} from '@angular/fire/firestore';
import { informacion } from '../s-modelos/ArchivosFire';
import { Observable } from 'rxjs';

declare var gtag: any;

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore:Firestore) { 


  }


  addPlace(inf: informacion){
    const placeRef =  collection(this.firestore, 'informacion');
    return addDoc(placeRef, inf);
  }


  getPlaces(): Observable<informacion[]>{
    const placeRef =  collection(this.firestore, 'informacion');
    return collectionData(placeRef, {idField: 'id'}) as Observable<informacion[]>; //idField es donde Firebase almacena el ID del registro, por ende es necesario escribirlo de esa manera jsjs
    // return collectionData(placeRef) as Observable<informacion[]>;
    // return collectionData(placeRef);
  }


  deletePlace(place:informacion){
    const placeDocReft = doc(this.firestore, `informacion/${place.id}`);
    return deleteDoc(placeDocReft);
  }


  // Método para actualizar un lugar
  updatePlace(inf: informacion): Promise<void> {
    const placeDocRef = doc(this.firestore, `informacion/${inf.id}`);
    // Actualizar los datos del lugar con los nuevos valores
    return setDoc(placeDocRef, inf, { merge: true }); // Utilizamos merge: true para actualizar solo los campos modificados
  }


  trackPageView(pageName: string): void {
    gtag('event', 'page_view', { 'event_category': 'Page', 'event_label': pageName });
  }
  

}
