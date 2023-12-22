import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apprenant } from 'src/app/models/apprenant';
import { AllServiceService } from 'src/app/services/all-service.service';
import { SweetMessageService } from 'src/app/services/sweet-message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.scss']
})
export class AddApprenantComponent implements OnInit {
  // Attributs
  photo = "";

  matricule = "";
  nom = "";
  prenom = "";
  email = "";
  numero = "";
  classe = "";
  classes:any[]=[];
  classesActives:any[]=[];

  // Methodes
  constructor(private router: Router,private service:AllServiceService, private message:SweetMessageService) {

  }

  ngOnInit(): void {
    this.service.getAll("classes",(reponse:any)=>{
      this.classes=reponse;
      reponse.forEach((element:any) => {
        if (element.etat=='actif') {
          this.classesActives.push(element);
        }
      });
    })
    // this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
    // console.warn(this.classesActives);
  }

  // la fonction qui verifie les veleurs saisies au niveau des champs
  verifierFormAjout() {
    if (this.matricule != "" || this.prenom != "" || this.nom != "" || this.email != "" || this.numero != "" || this.classe != "") {
      this.ajouterApprenant();

    } else {
      this.sweetMessage("désolé", "veuillez renseigner tous les chmaps", "error");

    }
  }

  // la fonctionn qui fait l'ajout au niveau des champts
  ajouterApprenant() {
    this.service.add("apprenants", {
      matricule:"mat"+Math.random(),
      photo:"img",
      nom:this.nom,
      prenom:this.prenom,
      email:this.email,
      numero:this.numero,
      classeId:Number(this.classe),
      pass:"passer1234",
      etat:"actif"
    }, (reponse: any) => {
      console.log(reponse);
      if (reponse) {
        this.message.simpleMessage("merci", "Insertion faite avec succes", "success");
      }
    });
    this.sweetMessage("merci", "Insertion faite avec succes", "success");
    this.router.navigate(['admin/listApprenant']);
  }

  resetForm() {
    this.matricule = "";
    this.photo = "";
    this.nom = "";
    this.prenom = "";
    this.email = "";
    this.numero = "";
    this.classe = "";
  }
  sweetMessage(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
}
