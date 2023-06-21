import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ProductCreateComponent } from './pages/admin/product-create/product-create.component';
import { ProductDetailComponent } from './pages/admin/product-detail/product-detail.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductListComponent },
      { path: 'products/update/:id', component: ProductUpdateComponent },
      { path: 'products/detail/:id', component: ProductDetailComponent },
      { path: 'products/create', component: ProductCreateComponent },
    ]
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
