import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    public firestore: AngularFirestore // Inject Firestore service
  ) {}
  getMovies() {
    const moviesRef = this.firestore.collection<any>('movies');
    return moviesRef.valueChanges({ idField: 'movieDocumentId' });
  }
  createMovie(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('movies')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
  logicDelete({ movieDocumentId, borrado }) {
    return this.firestore.collection('movies').doc(movieDocumentId).set({ borrado }, { merge: true });
  }
}
