import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: IProduct
  constructor(
    private productService: ProductService,

    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((param: any) => {
      const id = String(param.get('id'))

      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product = product

        },
        error: (err) => console.log(err),
        complete: () => console.log('done list one')
      })
    })
  }
}
