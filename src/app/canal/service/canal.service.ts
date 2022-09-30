import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Canal } from 'src/app/core/model/canal';
import { Message } from 'src/app/core/model/message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CanalService {
  private collection$!: Observable<Canal[]>;
  constructor(private http: HttpClient) {}
  getAllCanal(): Observable<Canal[]> {
    let host = environment.host;
    return this.http.get<Canal[]>(host + '/canal/allcanals');
  }

  AjouterCanal(nom: string): Observable<Canal[]> {
    let host = environment.host;
    return this.http.post<Canal[]>(host + '/canal/ajoutcanal', { nom: nom });
  }
  modifierCanal(canal: Canal): Observable<Canal> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(canal);
    let host = environment.host;
    return this.http.put<Canal>(host + '/canal/modifycanal', body, {
      headers: headers,
    });
  }
  supprimerCanal(idCanal: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('idCanal', idCanal);
    let host = environment.host;
    return this.http.delete(host + '/canal/deletecanal', {
      params: queryParams,
    });
  }
}
