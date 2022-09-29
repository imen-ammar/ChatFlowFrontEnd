import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Canal } from 'src/app/core/model/canal';
import { CanalService } from '../../service/canal.service';

@Component({
  selector: 'app-page-ajouter-canal',
  templateUrl: './page-ajouter-canal.component.html',
  styleUrls: ['./page-ajouter-canal.component.scss']
})
export class PageAjouterCanalComponent implements OnInit {

  public item:Canal =new Canal();


  constructor(private canalServie:CanalService, public router:Router) { }

  ngOnInit() {
    // console.log(this.item, "object add canal")
  }
  onAddCanal(obj:Canal){
    // console.log(obj, "object add canal")

      /*this.canalServie.addCanal(obj).subscribe(data=>{
        this.router.navigate(['ajoutcanal']);
        console.log(data)

      })*/

    }

}
