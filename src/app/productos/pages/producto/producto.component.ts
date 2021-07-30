import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap} from 'rxjs/operators';
import { ProductosServicesService } from '../../services/productos-services.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto!: Producto

  constructor( private activatedRoute: ActivatedRoute,
              private ProductosServicesService: ProductosServicesService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.ProductosServicesService.getProductosPorId(id))
    )
        .subscribe( Producto => this.producto = Producto); 
  }

}
