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
  user = new User;
  birthDate: number = -1;
  loading = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {
  }

  save() {
    this.loading = true;
    this.birthDate = new Date(this.user.birthDate).getTime();
    this.user.birthDate = this.birthDate;

    this.firestore.collection('users').add(this.user.toJSON()).then((result) => {

      this.loading = false;
      console.log("added user successfull:", result);
      this.dialogRef.close();
    });
  }

}
