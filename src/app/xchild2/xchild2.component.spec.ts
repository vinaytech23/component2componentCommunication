import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xchild2Component } from './xchild2.component';

describe('Xchild2Component', () => {
  let component: Xchild2Component;
  let fixture: ComponentFixture<Xchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
