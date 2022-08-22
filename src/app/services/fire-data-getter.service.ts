import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { map } from '@firebase/util';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireDataGetterService {

  userGroups: Observable<any[]>;
  private userName = '';

  constructor(private readonly afs: AngularFirestore,
              private afAuth: AngularFireAuth) {
    const userGroupsCollection = afs.collection('usergroups');
    this.userGroups = userGroupsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as {} ;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }

  checkUser(user) {
    return this.afAuth.signInWithEmailAndPassword(
      user.username,
      user.password
    );
  }

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  getUserGroups() {
    return this.userGroups;
  }

  addUserGroup(newUserGroup) {
    this.afs.collection('usergroups')
      .add({
        docName: newUserGroup.docName,
        name: newUserGroup.name,
        year: newUserGroup.year
      });
  }

  editUserGroup(userGroup) {
    return this.afs
      .doc('usergroups/' + userGroup.id)
      .update({
        docName: userGroup.docName,
        name: userGroup.name,
        year: userGroup.year
      });
  }

  deleteUserGroup(userGroup) {
    return this.afs
      .doc('usergroups/' + userGroup.id)
      .delete();
  }

  getUsers(id) {
    return this.afs
      .doc('usergroups/' + id)
      .collection('users')
      .valueChanges();
  }
}
