import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SispPaymentDto } from './sisp-payment.dto';

@Injectable({
  providedIn: 'root',
})
export class SispService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
    }),
  };

  constructor(private http: HttpClient) {}

  goToSisp(data: SispPaymentDto) {
    return this.http.post(`${data.paymentUrl}`, data);
  }
}
