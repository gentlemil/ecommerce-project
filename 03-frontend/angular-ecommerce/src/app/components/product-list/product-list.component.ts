import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  blueLine = [];
  pinkLine = [];
  aloeLine = [];
  mistLine = [];
  accessoriesLine = [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.products.map(item => {
      this.blueLine = this.products.filter(item => {
        item.category === 'Linia do cery wrażliwej/dojrzałej' ? this.blueLine.push(item) : null;
        item.category === 'Linia do cery tłustej/mieszanej/trądzikowej' ? this.pinkLine.push(item) : null;
        item.category === 'Aleo Line' ? this.aloeLine.push(item) : null;
        item.category === 'Accessories' ? this.accessoriesLine.push(item) : null;
        item.category === 'mist' ? this.mistLine.push(item) : null;
      })

    })
  }

}
