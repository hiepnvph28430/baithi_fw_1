import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  submitted: boolean = false
  product !: IProduct
  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
    price: [0, [Validators.required, Validators.min(1)]],
    desc: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
  })
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((param: any) => {
      const id = String(param.get('id'))

      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product = product
          this.form.patchValue(product)
        },
        error: (err) => console.log(err),
        complete: () => console.log('done list one')
      })
    })
  }

  onHandleSubmit() {
    this.submitted = true
    if (this.form.valid) {
      const product: IProduct = {
        id: this.product.id,
        name: this.form.value.name || '',
        price: this.form.value.price || 0,
        desc: this.form.value.desc || ''
      }

      this.productService.updateProduct(product).subscribe({
        next: (product) => {
          alert('Update san pham thanh cong, sau 1s se chuyen ve trang admin')
          setTimeout(() => {
            this.router.navigate(['admin'])
            console.log('product update', product)
          }, 1000);
        },
        error: (err) => console.log(err),
        complete: () => console.log('done update')
      })
    }
  }
}
