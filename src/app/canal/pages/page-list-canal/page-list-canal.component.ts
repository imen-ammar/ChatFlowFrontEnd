import { Component, OnInit } from '@angular/core';
import { Canal } from 'src/app/core/model/canal';
import { Message } from 'src/app/core/model/message';
import { CanalService } from '../../service/canal.service';


@Component({
  selector: 'app-page-list-canal',
  templateUrl: './page-list-canal.component.html',
  styleUrls: ['./page-list-canal.component.scss']
})
export class PageListCanalComponent implements OnInit {
  canaux?: Canal[];
  messages?: Message[];
  idCanal? : number;
  nomCanal?: string;
  message? : Message;

  constructor(private canalServie: CanalService) { }

  ngOnInit(): void {
    this.getAllCanal();
  }
  getAllCanal(){
    this.canalServie.getAllCanal().subscribe(data => {
      this.canaux = data;
    })
  }
  AjouterCanal(){
    let nom_canal = prompt("Saisir le nom du canal à ajouter", "");
    let text=nom_canal;
    if (nom_canal != null || nom_canal != "") {
      this.canalServie.AjouterCanal(text!).subscribe(data => {
        this.getAllCanal();
      })
    }
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
      this.recupererMessagesByCanal(this.idCanal!);
    });
  }
  modifierCanal(){
    let nom_canal = prompt("Saisir le nom du canal", this.nomCanal);
    let text=nom_canal;
    let canal:Canal = new Canal();
    canal.id=this.idCanal!;
    canal.nom=nom_canal!;
    if (nom_canal != null || nom_canal != "") {
      this.canalServie.modifierCanal(canal!).subscribe(data => {
        this.getAllCanal();
      })
    }
  }
  supprimerCanal(){
    if (window.confirm("Voulez-vous supprimer ce canal?")) {
      this.canalServie.supprimerCanal(this.idCanal!).subscribe(data => {
        this.getAllCanal();
      })
    }else{
      alert("Suppression annulée");
    }
  }


}
