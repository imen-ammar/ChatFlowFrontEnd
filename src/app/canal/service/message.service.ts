import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/core/model/message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  recupererMessageByIdCanal(id: number): Observable<Message[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('idCanal', id);

    let host = environment.host;
    return this.http.get<Message[]>(host + '/message/recuperer', {
      params: queryParams,
    });
  }

  envoyerMessage(message: Message): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(message);
    console.log(body);
    let host = environment.host;
    return this.http.post(host + '/message/save', body, { headers: headers });
  }
}
