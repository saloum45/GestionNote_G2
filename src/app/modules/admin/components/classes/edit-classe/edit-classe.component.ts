import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import { AllServiceService } from 'src/app/services/all-service.service';
import { SweetMessageService } from 'src/app/services/sweet-message.service';
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
  constructor(private router: Router, private routerActivated:ActivatedRoute,private service:AllServiceService,private message:SweetMessageService) {

  }

  ngOnInit(): void {
    this.service.getById("classes",this.routerActivated.snapshot.params['id'],(reponse:any)=>{
      console.warn('ele de id ',reponse);
      this.nom=reponse[0].nom;
      this.description=reponse[0].description;
      this.etat=reponse[0].etat;
    });
  }


  // la fonction qui verifie les veleurs saisies au niveau des champs
  verifierFormAjout() {
    if (this.nom != "" || this.description != "") {
      this.modifierClasse();

    } else {
      this.message.simpleMessage("désolé", "veuillez renseigner tous les chmaps", "error");

    }
  }

  // la fonctionn qui fait l'ajout au niveau des champts
  modifierClasse() {

    this.service.update("classes",this.routerActivated.snapshot.params['id'],{nom:this.nom,description:this.description,etat:this.etat},(reponse:any)=>{
      console.warn('update result ',reponse);
    });
    this.router.navigate(['admin/listClasse']);
    this.message.simpleMessage("merci", "Modification faite avec succes", "success");

  }

  resetForm() {

    this.nom = "";
    this.description = "";

  }

}
