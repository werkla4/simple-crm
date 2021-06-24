import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { DialogEditUserComponent } from './dialog-edit-user.component';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditUserComponent ],
      imports: [MatDialogModule,
        AngularFireModule.initializeApp(environment.firebase)],
      providers: [ { provide: MatDialogRef, useValue: {} } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
