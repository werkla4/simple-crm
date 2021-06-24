import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User = new User();
  loading = false;
  userId!: string;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  save(){
    this.loading = true;
    let birthDate = new Date(this.user.birthDate).getTime();
    this.user.birthDate = birthDate;

    console.log("INPUT BIRTHDATE: ", this.user.birthDate);
    

    this.firestore.collection('users').doc(this.userId).update(this.user.toJSON()).then(()=>{
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
