import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicalRecordComponent } from './update-medical-record.component';

describe('UpdateMedicalRecordComponent', () => {
  let component: UpdateMedicalRecordComponent;
  let fixture: ComponentFixture<UpdateMedicalRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMedicalRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMedicalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
