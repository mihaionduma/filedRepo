import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CardDetailsModel } from 'src/app/shared/card-details.model';
import { ValidateDate } from './date-validator.validator';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  public paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private paymentService: PaymentService) {
    this.paymentForm = fb.group({
      creditCardNumber: ['', Validators.required],
      cardholder: ['', Validators.required],
      expirationDate:  ['', Validators.required],
      securityCode: ['', Validators.maxLength(3)],
      amount: ['', Validators.required]
    },  {validator: ValidateDate('expirationDate') });
   }

  ngOnInit(): void {
  }

  public submitForm(): void {
    this.paymentForm.reset();
    this.paymentService.pay(this.parseForm());
  }

  private parseForm(): CardDetailsModel {
    const cardValues = new CardDetailsModel();
    // tslint:disable-next-line:forin
    for (const item in this.paymentForm.value) {
      console.log(this.paymentForm.value[item], 'ok');
      cardValues[item] = this.paymentForm.value[item];
    }
    return cardValues;
  }

}
