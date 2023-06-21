import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  submitted: boolean = false
  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
    price: [0, [Validators.required, Validators.min(1)]],
    desc: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
  })
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  onHandleSubmit() {
    this.submitted = true
    if (this.form.valid) {
      const product: IProduct = {
        name: this.form.value.name || '',
        price: this.form.value.price || 0,
        desc: this.form.value.desc || ''
      }

      this.productService.addProduct(product).subscribe({
        next: (product) => {
          alert('Them moi san pham thanh cong, sau 1s se chuyen ve trang admin')
          setTimeout(() => {
            this.router.navigate(['admin'])
            console.log('product new', product)
          }, 1000);
        },
        error: (err) => console.log(err),
        complete: () => console.log('done add')
      })
    }
  }
}
