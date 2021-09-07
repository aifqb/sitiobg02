import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoTarjetaCategoriaComponent } from './producto-tarjeta-categoria.component';

describe('ProductoTarjetaCategoriaComponent', () => {
  let component: ProductoTarjetaCategoriaComponent;
  let fixture: ComponentFixture<ProductoTarjetaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoTarjetaCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoTarjetaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
