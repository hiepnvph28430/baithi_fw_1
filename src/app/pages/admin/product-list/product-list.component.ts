import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products !: IProduct[]

  constructor(
    private productService: ProductService
  ) {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data
      },
      error: (err) => console.log(err),
      complete: () => console.log('done list all')
    })
  }

  removeItem(id: any) {
    const confirm = window.confirm("Ban co chac muon xoa khong ?")
    if (confirm) {
      this.productService.deleteProduct(id).subscribe({
        next: (product) => {
          alert("Ban da xoa thanh cong, load lai trang sau 1s")
          setTimeout(() => {
            this.products = this.products.filter(item => item.id !== id)
            console.log({ product })
          }, 1000);
        },
        error: (err) => console.log(err),
        complete: () => console.log('done delete')
      })
    }
  }
}
