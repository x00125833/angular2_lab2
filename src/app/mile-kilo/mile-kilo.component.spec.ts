/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MileKiloComponent } from './mile-kilo.component';

describe('MileKiloComponent', () => {
  let component: MileKiloComponent;
  let fixture: ComponentFixture<MileKiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MileKiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileKiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
