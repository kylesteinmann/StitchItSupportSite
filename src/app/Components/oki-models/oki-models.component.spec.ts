import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkiModelsComponent } from './oki-models.component';

describe('OkiModelsComponent', () => {
  let component: OkiModelsComponent;
  let fixture: ComponentFixture<OkiModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkiModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkiModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
