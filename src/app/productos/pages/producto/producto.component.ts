import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe( ({ id }) => console.log(id)); 
  }

}
