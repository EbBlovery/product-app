import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodComponent } from './addprod.component';

describe('AddprodComponent', () => {
  let component: AddprodComponent;
  let fixture: ComponentFixture<AddprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
