import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Canal } from 'src/app/core/model/canal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CanalService {


  private collection$! :Observable<Canal[]>;


  constructor(private http:HttpClient) {
  }
    getAllCanal():Observable<Canal[]>
    {
    let host=environment.host;
    return this.http.get<Canal[]>(host+"/canal/allcanals");


  }
}
