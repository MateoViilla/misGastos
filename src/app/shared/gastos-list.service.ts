import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GastosListService {

  private data = [
    {
      _id: '1',
      nombre: 'Carro',
      expanded: true,
      icon:'car',
      gastos: [
        { id: 0, nombre: 'Gasolina', precioGasto: '8' },
        { id: 1, nombre: 'Lavadero', precioGasto: '18' },
        { id: 2, nombre: 'Llantas', precioGasto: '82' },
        { id: 3, nombre: 'Parqueadero', precioGasto: '18' }        
      ],
      total:8+18+82+18
    },
    {
      _id: '2',
      nombre: 'Casa',
      icon: 'home',
      gastos: [
        { id: 0, nombre: 'Mercado', precioGasto: '800' },
        { id: 1, nombre: 'Arriendo', precioGasto: '1000' },
        { id: 2, nombre: 'Servicios públicos', precioGasto: '400' },
        { id: 3, nombre: 'Arreglo lavadora', precioGasto: '300' }        
      ],
      total:800+1000+400+300
    },
    {
      _id: '3',
      nombre: 'Hijos',
      icon: 'logo-reddit',
      gastos: [
        { id: 0, nombre: 'Mesadas', precioGasto: '100' },
        { id: 1, nombre: 'Paseos', precioGasto: '90' },
        { id: 2, nombre: 'Útiles escolares', precioGasto: '82' },
        { id: 3, nombre: 'Ropa', precioGasto: '150' }        
      ],
      total:100+90+82+150
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getGastos() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}


