import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptqComponent } from './javascriptq.component';

describe('JavascriptqComponent', () => {
  let component: JavascriptqComponent;
  let fixture: ComponentFixture<JavascriptqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
