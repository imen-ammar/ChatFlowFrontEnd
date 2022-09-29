import { Time } from "@angular/common";
import { Utilisateur } from "./utilisateur";
import { Canal } from "./canal";

export class Message {
    id!:number;
    contenu!:string;
    time!:Time;
    //utilisateur:Utilisateur= new Utilisateur();
    canal:Canal=new Canal();
}
