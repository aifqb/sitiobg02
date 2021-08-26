import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-producto-seach',
  templateUrl: './producto-seach.component.html',
  styleUrls: ['./producto-seach.component.css']
})
export class ProductoSeachComponent implements OnInit {

 
  @Input('data') productos: Producto[] = [];
  
  constructor() { }
  
  dataSource = new MatTableDataSource(this.productos);
  displayedColumns: string[] = ['Codigo', 'Producto', 'Presentacion', 'accion'];
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
}
