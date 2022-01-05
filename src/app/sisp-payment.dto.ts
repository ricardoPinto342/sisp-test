export class SispPaymentDto {
  transactionCode!: string;
  posID!: string;
  posAutCode!: string;
  merchantID!: string;
  merchantRef!: string;
  merchantSession!: string;
  amount!: number;
  currency!: string;
  is3DSec!: string;
  urlMerchantResponse!: string;
  languageMessages!: string;
  timeStamp!: string;
  fingerPrintVersion!: string;
  entityCode!: string;
  referenceNumber!: string;
  fingerPrint!: string;
  paymentUrl!: string;
}
