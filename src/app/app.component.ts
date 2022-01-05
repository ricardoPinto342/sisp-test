import { Component } from '@angular/core';
import { SispPaymentDto } from './sisp-payment.dto';
import { SispService } from './sisp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sispPaymentDto: SispPaymentDto = new SispPaymentDto();

  constructor(private sispService: SispService) {
    this.sispPaymentDto.amount = 1000;
    this.sispPaymentDto.currency = '132';
    this.sispPaymentDto.entityCode = '12';
    this.sispPaymentDto.posID = '90000189';
    this.sispPaymentDto.fingerPrintVersion = '1';
    this.sispPaymentDto.posAutCode = 'cg2TqZrodJLnFPE3';
    this.sispPaymentDto.merchantID = '9000182';
    this.sispPaymentDto.merchantSession = 'S20220105144742';
    this.sispPaymentDto.urlMerchantResponse =
      'https://mc.vinti4net.cv/vbvtoken/merchantResp.jsp';
    this.sispPaymentDto.languageMessages = 'pt';
    this.sispPaymentDto.timeStamp = '2022-01-05 14:47:42';
    this.sispPaymentDto.referenceNumber = '12345';
    this.sispPaymentDto.fingerPrint =
      'm4Y7xKBLGxc8IwGAcQ7ITqDDwWhkcSsaUVg1Jku77I+JP6eIGcumEZt2+o/WhibTNi3xUo1bgWWp4Iu1Mh7Q9Q==';
    this.sispPaymentDto.paymentUrl =
      'https://mc.vinti4net.cv/BizMPIOnUsSisp/CardPayment?FingerPrint=' +
      encodeURIComponent(this.sispPaymentDto.fingerPrint) +
      '&TimeStamp=' +
      encodeURIComponent(this.sispPaymentDto.timeStamp) +
      '&FingerPrintVersion=' +
      encodeURIComponent(this.sispPaymentDto.fingerPrintVersion);
  }

  ngOnInit(): void {
    this.sispService.goToSisp(this.sispPaymentDto).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
