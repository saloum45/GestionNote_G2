import { Component, OnInit } from '@angular/core';
import { Apprenant } from 'src/app/models/apprenant';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.scss']
})
export class AddApprenantComponent implements OnInit {
  // Attributs

  matricule = "";
  nom = "";
  prenom = "";
  email = "";
  numero = "";
  classe = "";


  // Methodes
  constructor() {

  }

  ngOnInit(): void {

  }

  ajouterApprenant() {
    let apprenant;
    if (localStorage.getItem('apprenants') == null || localStorage.getItem('apprenants') == undefined) {
      apprenant = new Apprenant(this.matricule, this.nom, this.prenom, this.email, this.numero, this.classe, "passer", 1);
      localStorage.setItem('apprenants', JSON.stringify([apprenant]));
      this.sweetMessage("merci", "Insertion faite avec succes", "success");
    } else {
      let listeApprenants = JSON.parse(localStorage.getItem('apprenants') || '[]');
      let incrementedId = listeApprenants[listeApprenants.length - 1].id + 1;
      apprenant = new Apprenant(this.matricule, this.nom, this.prenom, this.email, this.numero, this.classe, "passer", incrementedId);
      listeApprenants.push(apprenant);
      localStorage.setItem('apprenants', JSON.stringify(listeApprenants));
      this.sweetMessage("merci", "Insertion faite avec succes", "success");
      // réinitialisation du formulaire
      this.matricule = "";
      this.nom = "";
      this.prenom = "";
      this.email = "";
      this.numero = "";
      this.classe = "";

    }
  }

  sweetMessage(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
}
