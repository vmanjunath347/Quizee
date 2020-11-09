import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaqComponent } from './javaq.component';

describe('JavaqComponent', () => {
  let component: JavaqComponent;
  let fixture: ComponentFixture<JavaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
