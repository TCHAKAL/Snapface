export class FaceSnapModel {
  id!: number;
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  location?: string; //? ca veut dire optional


  //Ou bien
  // constructor(public title: string,public description: string, public createdDate: Date ,public snaps: number,public imageUrl: string,public location?: string){
  //
  // }
}
