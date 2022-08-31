export class FaceSnapModel {
  id!: number;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  location?: string; //? ca veut dire optional


  //Ou bien
  // constructor(public title: string,public description: string, public createdDate: Date ,public snaps: number,public imageUrl: string,public location?: string){
  //
  // }
}
