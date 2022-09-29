import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Canal } from 'src/app/core/model/canal';
import { Message } from 'src/app/core/model/message';
import { CanalService } from '../../service/canal.service';

@Component({
  selector: 'app-page-list-canal',
  templateUrl: './page-list-canal.component.html',
  styleUrls: ['./page-list-canal.component.scss']
})
export class PageListCanalComponent implements OnInit {

  //Décalaration
  canaux?: Canal[];
  messages?: Message[];
  idCanal? : number;
  nomCanal?: string;
  message? : Message;

  constructor(private canalServie: CanalService) { }

  ngOnInit(): void {
    this.canalServie.getAllCanal().subscribe(data => {
      this.canaux = data;
      
    })
  }
  fixerCanalEtRecupererMessagesByCanal(idCanal: number, nomCanal:string){
    this.idCanal=idCanal;
    this.nomCanal=nomCanal;
    this.recupererMessagesByCanal(idCanal);
  }

  recupererMessagesByCanal(idCanal: number) {
    this.canalServie.recupererMessageByIdCanal(idCanal).subscribe(data => {
      this.messages = data;
    })
  }

  envoyerMessage(contenu: string) {
    this.message = new Message();
    this.message.canal.id=this.idCanal!;
    this.message.contenu=contenu;
    this.canalServie.envoyerMessage(this.message).subscribe(data => {
      this.recupererMessagesByCanal(this.idCanal!); // Actualiser la liste des messages
    });

  }
}
