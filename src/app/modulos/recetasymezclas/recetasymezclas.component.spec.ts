import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasymezclasComponent } from './recetasymezclas.component';

describe('RecetasymezclasComponent', () => {
  let component: RecetasymezclasComponent;
  let fixture: ComponentFixture<RecetasymezclasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetasymezclasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetasymezclasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
