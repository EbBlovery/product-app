import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProChangeComponent } from './pro-change.component';

describe('ProChangeComponent', () => {
  let component: ProChangeComponent;
  let fixture: ComponentFixture<ProChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
