import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CyberTextComponent} from './cyber-text.component';

describe('CyberTextComponent', () => {
  let component: CyberTextComponent;
  let fixture: ComponentFixture<CyberTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CyberTextComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CyberTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
