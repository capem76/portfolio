import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCertificadoComponent } from './modal-certificado.component';

describe('ModalCertificadoComponent', () => {
  let component: ModalCertificadoComponent;
  let fixture: ComponentFixture<ModalCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCertificadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
