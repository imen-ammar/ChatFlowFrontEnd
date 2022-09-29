export class Canal {

  id!:number;
  nom!:string;

constructor(obj ?: Partial<Canal>) {
    if(obj) {
    Object.assign(this, obj);
    }

}
}
