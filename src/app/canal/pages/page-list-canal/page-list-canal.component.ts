import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CanalI } from 'src/app/core/interface/canal-i';
import { Canal } from 'src/app/core/model/canal';
import { CanalService } from '../../service/canal.service';

@Component({
  selector: 'app-page-list-canal',
  templateUrl: './page-list-canal.component.html',
  styleUrls: ['./page-list-canal.component.scss']
})
export class PageListCanalComponent implements OnInit {
 //canal$ ?:Observable<Canal[]> ;
 canal ?:Canal[];
  constructor(private canalServie:CanalService) { }

  ngOnInit(): void {
  }

  onGetAllCanal(){
  //this.canal$= this.canalServie.getAllCanal().pipe(
    //map((data)=> {data :data}
    //)
    //);
this.canalServie.getAllCanal().subscribe(data=>{
  this.canal=data;
  console.log(data)
})

  }

}
