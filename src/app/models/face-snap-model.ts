export class FaceSnapModel {
  // title: string;
  // description: string;
  // dateCreation: Date;
  // snaps: number;
  // imageUrl : string;
  //
  // constructor(title: string, description: string, dateCreation: Date, snaps: number,imageUrl: string) {
  //   this.title = title;
  //   this.description = description;
  //   this.dateCreation = dateCreation;
  //   this.snaps = snaps;
  //   this.imageUrl = imageUrl;
  // }

  //Ou bien
  constructor(public title: string,public description: string, public dateCreation: Date ,public snaps: number,public imageUrl: string){

  }
}
