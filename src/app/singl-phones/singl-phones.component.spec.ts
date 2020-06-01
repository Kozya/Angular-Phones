import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglPhonesComponent } from './singl-phones.component';

describe('SinglPhonesComponent', () => {
  let component: SinglPhonesComponent;
  let fixture: ComponentFixture<SinglPhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglPhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
