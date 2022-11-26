import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChapitreMenuComponent} from './chapitre-menu.component';

describe('ChapitreMenuComponent', () => {
  let component: ChapitreMenuComponent;
  let fixture: ComponentFixture<ChapitreMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapitreMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChapitreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
