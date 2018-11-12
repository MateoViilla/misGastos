import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GastosListService } from '../shared/gastos-list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cart = [];
  items = [];
  totalGastos : any;
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private router: Router, private gastosService: GastosListService){

  }
  ngOnInit(): void {
    this.items = this.gastosService.getGastos();
    this.totalGastos = this.getTotalGastos();
  }

  getTotalGastos(): Number{
    let total = 0;
    this.items.forEach(element => {
      total += element.total;
    });
    return total;
  }

}
