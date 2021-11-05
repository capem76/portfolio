import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoProjectComponent } from './modal-info-project.component';

describe('ModalInfoProjectComponent', () => {
  let component: ModalInfoProjectComponent;
  let fixture: ComponentFixture<ModalInfoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfoProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
