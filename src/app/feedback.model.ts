
export class Feedback{

  public email: string;
  public subject: string;
  public description: string;

  constructor(email:string,subject:string,desc:string){
    this.email = email;
    this.subject = subject;
    this.description = desc;
  }

}