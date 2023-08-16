import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigos',
  templateUrl: './codigos.component.html',
  styleUrls: ['./codigos.component.css']
})
export class CodigosComponent implements OnInit{

  qrCodeUrl: string = '';
  apiUrl: string = 'http://api.qrserver.com/v1/create-qr-code/';


  qrContent: string = '';
  qrSize: string = '200x200';


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.generateQRCode();
  }

  // generateQRCode() {
  //   const dataToEncode = 'HelloWorld!';
  //   const size = '200x200';

  //   const fullUrl = `${this.apiUrl}?data=${dataToEncode}&size=${size}`;

  //   this.qrCodeUrl = fullUrl;
  // }


  generateQRCode() {
    const encodedContent = encodeURIComponent(this.qrContent);
    const fullUrl = `${this.apiUrl}?data=${encodedContent}&size=${this.qrSize}`;

    this.qrCodeUrl = fullUrl;
  }

}
