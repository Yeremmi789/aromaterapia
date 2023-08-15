import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarInfoComponent } from './enviar-info.component';

describe('EnviarInfoComponent', () => {
  let component: EnviarInfoComponent;
  let fixture: ComponentFixture<EnviarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
