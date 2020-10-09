import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actor } from '../interfaces/actor';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(
    public firestore: AngularFirestore // Inject Firestore service
  ) {}

  getActors() {
    const moviesRef = this.firestore.collection<Actor>('actores');
    return moviesRef.valueChanges({ idField: 'actorDocumentId' });
  }
  createActor(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('actores')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
  logicDelete({ actorDocumentId, borrado }) {
    return this.firestore.collection('actores').doc(actorDocumentId).set({ borrado }, { merge: true });
  }
  updateActor({ actorDocumentId, nuevoActor }) {
    return this.firestore
      .collection('actores')
      .doc(actorDocumentId)
      .set({ ...nuevoActor }, { merge: true });
  }
}
