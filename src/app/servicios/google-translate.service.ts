import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateService {

  private apiKey: string = 'AIzaSyBAZcQJ5UdcxBC2NA5lZdusXb4Iy1PJoYc'; // Reemplaza 'TU_CLAVE_API' con tu clave API de Google Translate

  constructor(private http: HttpClient) { }

  translateText(text: string, targetLang: string): Promise<string> {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
    const body = {
      q: text,
      target: targetLang
    };

    return this.http.post<any>(url, body)
      .toPromise()
      .then(response => response.data.translations[0].translatedText)
      .catch(error => {
        console.error('Error al traducir el texto:', error);
        return '';
      });
  }
}
