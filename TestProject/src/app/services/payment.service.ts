import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CardDetailsModel } from '../shared/card-details.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  public pay(paymentDetails: CardDetailsModel): void {
    console.log(paymentDetails);
    const options = {
      // tslint:disable-next-line:object-literal-key-quotes
      'creditCardNumber': paymentDetails.creditCardNumber,
      // tslint:disable-next-line:object-literal-key-quotes
      'cardholder': paymentDetails.cardholder,
      // tslint:disable-next-line:object-literal-key-quotes
      'expirationDate': paymentDetails.expirationDate,
      // tslint:disable-next-line:object-literal-key-quotes
      'securityCode': paymentDetails.securityCode,
      // tslint:disable-next-line:object-literal-key-quotes
      'amount': paymentDetails.amount,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json;charset=utf-8'
      })
    };
    this.http.post('your-server-here', options, httpOptions);

  }
}
