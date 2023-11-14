export class Apprenant {
  public matricule:String="";
  public nom:String="";
  public prenom:String="";
  public email:String="";
  public numero:String="";
  public classe:String="";
  public pass:String="";

  constructor(matricule:String,nom:String,prenom:String,email:String,numero:String,classe:String,pass:String) {
    this.matricule=matricule;
    this.nom=nom;
    this.prenom=prenom;
    this.email=email;
    this.numero=numero;
    this.classe=classe;
    this.pass=pass;
  }
}
