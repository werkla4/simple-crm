import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  loading = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {
  }

  save() {
    this.loading = true;
    let birthDate = new Date(this.user.birthDate).getTime();
    this.user.birthDate = birthDate;

    this.firestore.collection('users').add(this.user.toJSON()).then((result) => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
