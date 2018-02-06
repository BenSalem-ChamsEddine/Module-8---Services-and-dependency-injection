import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../domain/iproduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = '';
  products: IProduct[];

  constructor(private prodService: ProductService) { }
  ngOnInit() {
     console.log('In OnInit');
     this.products = this.prodService.getProductList();
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(event): void {
        this.pageTitle = 'Product List: ' + event;
    }
}
