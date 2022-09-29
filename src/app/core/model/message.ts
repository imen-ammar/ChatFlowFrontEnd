import { Time } from '@angular/common';
import { Canal } from './canal';
import { Utilisateur } from './utilisateur';

export class Message {
  id!: number;
  contenu!: string;
  time!: Time;
  canal: Canal = new Canal();

  constructor(obj?: Partial<Message>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
