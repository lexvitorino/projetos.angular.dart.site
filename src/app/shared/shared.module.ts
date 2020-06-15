import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { RouterModule } from '@angular/router';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxMaskModule } from 'ngx-mask';
import { JsonInterceptor } from './interceptor/json.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './theme/theme.module';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ThemeModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    CurrencyMaskModule,
    SignaturePadModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    NgxMaskModule.forRoot(),
    NgbModule
  ],
  providers: [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JsonInterceptor, multi: true }
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ThemeModule,
    RouterModule,
    ComponentsModule,
    CurrencyMaskModule,
    SignaturePadModule,
    PipesModule,
    SweetAlert2Module,
    NgxMaskModule,
    NgbModule
  ]
})
export class SharedModule {
}
