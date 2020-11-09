import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonqComponent } from './pythonq.component';

describe('PythonqComponent', () => {
  let component: PythonqComponent;
  let fixture: ComponentFixture<PythonqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
