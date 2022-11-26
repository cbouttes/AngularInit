import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCodeComponent } from './text-code.component';

describe('TextCodeComponent', () => {
  let component: TextCodeComponent;
  let fixture: ComponentFixture<TextCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
