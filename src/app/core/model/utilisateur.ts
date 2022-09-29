export class Utilisateur {

  id!: number;

  constructor(obj?: Partial<Utilisateur>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
