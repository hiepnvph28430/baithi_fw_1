import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { ProductDetailComponent } from './pages/admin/product-detail/product-detail.component';
import { ProductCreateComponent } from './pages/admin/product-create/product-create.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductUpdateComponent, ProductDetailComponent, ProductCreateComponent, NotfoundComponent, AdminLayoutComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
