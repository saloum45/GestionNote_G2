import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import { AllServiceService } from 'src/app/services/all-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrls: ['./edit-classe.component.scss']
})
export class EditClasseComponent {
  // Attributs

  nom = "";
  description = "";
  etat = "";
  idClasseToModify: any;


  // Methodes
  constructor(private router: Router, private routerActivated:ActivatedRoute,private service:AllServiceService) {

  }

  ngOnInit(): void {
    this.service.getById("classes",this.routerActivated.snapshot.params['id'],(reponse:any)=>{
      console.warn('ele de id ',reponse);
      this.nom=reponse[0].nom;
      this.description=reponse[0].description;
      this.etat=reponse[0].etat;
    });
  }
  // brancherChamps() {

  //   let listeClasses = JSON.parse(localStorage.getItem('classes') || '[]');
  //   let classeToModify = listeClasses.find((element: any) => element.id == this.idClasseToModify);

  //   this.nom = classeToModify.nom;
  //   this.description = classeToModify.description;
  // }

  // la fonction qui verifie les veleurs saisies au niveau des champs
  verifierFormAjout() {
    if (this.nom != "" || this.description != "") {
      this.modifierClasse();

    } else {
      this.sweetMessage("désolé", "veuillez renseigner tous les chmaps", "error");

    }
  }

  // la fonctionn qui fait l'ajout au niveau des champts
  modifierClasse() {
    // let classe;
    // if (localStorage.getItem('classes') == null || localStorage.getItem('classes') == undefined) {
    //   classe = new Classe(1, this.nom, this.description,"actif");
    //   localStorage.setItem('classes', JSON.stringify([classe]));
    //   // this.sweetMessage("merci", "Insertion faite avec succes", "success");
    // } else {
    //   let listeClasses = JSON.parse(localStorage.getItem('classes') || '[]');
    //   // let incrementedId = listeClasses[listeClasses.length - 1].id + 1;
    //   // listeClasses.push(classe);
    //   listeClasses.forEach((element:any) => {
    //     classe = new Classe(element.id, this.nom, this.description,"actif");
    //     if (element.id==this.idClasseToModify) {
    //       element.nom=classe.nom;
    //       element.description=classe.description;
    //     }

    //   });
    //   localStorage.setItem('classes', JSON.stringify(listeClasses));
    //   // réinitialisation du formulaire
    //   this.resetForm();
    // }
    this.service.update("classes",{id:this.routerActivated.snapshot.params['id'],nom:this.nom,description:this.description,etat:this.etat},(reponse:any)=>{
      console.warn('update result ',reponse);
    });
    this.sweetMessage("merci", "Modification faite avec succes", "success");
    // this.router.navigate(['admin/listClasse']);

  }

  resetForm() {

    this.nom = "";
    this.description = "";

  }
  sweetMessage(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

}
