import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstPageComponent } from './modules/first-page/first-page.component';
import { PaymentPageComponent } from './modules/payment-page/payment-page.component';
import { PaymentService } from './services/payment.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
