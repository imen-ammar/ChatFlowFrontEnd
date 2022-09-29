import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Canal } from 'src/app/core/model/canal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  public name:any

  private collection$! :Observable<Canal[]>;



  constructor(private http:HttpClient) {
    let host=environment.host;
      //  this.collection$=this.http.get<Canal[]>(host+'/canal').pipe(

      //   map((tab) => {
      //     return tab.map(obj=>{
      //       return new Canal(obj);
      //     })
      //   })



  }
    getAllCanal():Observable<Canal[]>
    {
    let host=environment.host;
    return this.http.get<Canal[]>(host+"/canal/allcanals");


  }
    addCanal(item:Canal)
    {
    let host=environment.host;
    return this.http.post<Canal>(host+"/canal/ajoutcanal",item);


  }
}
