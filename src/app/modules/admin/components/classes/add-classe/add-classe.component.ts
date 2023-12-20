import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import { AllServiceService } from 'src/app/services/all-service.service';
import { SweetMessageService } from 'src/app/services/sweet-message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.scss']
})
export class AddClasseComponent {
  // Attributs

  nom = "";
  description = "";


  // Methodes
  constructor(private router: Router,private service:AllServiceService,private message:SweetMessageService) {

  }

  ngOnInit(): void {

  }

  // la fonction qui verifie les veleurs saisies au niveau des champs
  verifierFormAjout() {
    if (this.nom != "" || this.description != "" ) {
      this.ajouterClasse();

    } else {
      this.sweetMessage("désolé", "veuillez renseigner tous les chmaps", "error");

    }
  }

  // la fonctionn qui fait l'ajout au niveau des champts
  ajouterClasse() {
    this.service.add("classes",{nom:this.nom,description:this.description,etat:"actif"},(reponse:any)=>{
      console.log(reponse);
      if (reponse) {
        this.message.simpleMessage("merci", "Insertion faite avec succes", "success");
        this.router.navigate(['admin/listClasse']);

      }
    });
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
