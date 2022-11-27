import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShematicsComponent } from './shematics.component';

describe('ShematicsComponent', () => {
  let component: ShematicsComponent;
  let fixture: ComponentFixture<ShematicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShematicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
