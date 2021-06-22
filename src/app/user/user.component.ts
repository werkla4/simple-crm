import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  allUsers: any = [];

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore.collection("users").valueChanges().subscribe((changes)=>{
      this.allUsers = changes;
      console.log(this.allUsers);
    });
  }

  dialogAddUser(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, { });
  }

}
