import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';


const routes: Routes = [
  {path: 'intro', component: FirstPageComponent},
  {path: '', redirectTo: 'intro', pathMatch: 'full'},
  {path: 'payment', component: PaymentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
