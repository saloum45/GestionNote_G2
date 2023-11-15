import { Component, NgModule, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Professeur } from '../models/professeur.module';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.scss']
})
export class ProfesseursComponent implements OnInit {

  // Liste des attributs
  switch !: number;
  prof!: boolean;
  stateProf = "actif";
  valseAdminProf = 2;
  listeprofesseurs!: any[];
  id: number = 0;
  image !: string;
  prenom !: string;
  nom !: string;
  mail !: string;
  tel !: string
  classes !: string
  matiere !: string

  ngOnInit(): void {
    this.listeprofesseurs = JSON.parse(localStorage.getItem('professeurs') || '[]');
  }

  ajouterProfesseur() {
    let professeur;
    if (localStorage.getItem('professeurs') == null || localStorage.getItem('professeurs') == undefined) {
      professeur = new Professeur(this.id, this.image, this.prenom, this.nom, this.matiere,this.mail, this.tel, this.classes);
      localStorage.setItem('professeurs', JSON.stringify([professeur]));
      // this.sweetMessage("merci", "Insertion faite avec succes", "success");
    } else {
      this.listeprofesseurs = JSON.parse(localStorage.getItem('professeurs') || '[]');
      let incrementedId = this.listeprofesseurs[this.listeprofesseurs.length - 1].id + 1;
      professeur = new Professeur(incrementedId, this.image, this.prenom, this.nom, this.matiere, this.mail, this.tel, this.classes);
      this.listeprofesseurs.push(professeur);
      localStorage.setItem('professeurs', JSON.stringify(this.listeprofesseurs));
      // réinitialisation du formulaire
    }
  }

  valserAdminProfAdd() {
    this.valseAdminProf = 1;
  }
  valserAdminProfList() {
    this.valseAdminProf = 2;
  }
  valserAdminProfDetail() {
    this.valseAdminProf = 3;
  }
  showNote() {
    this.switch = 1;
  }

  showEvaluation() {
    this.switch = 2;
  }
  removeProf() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.prof = true;
        this.stateProf = "inactif";
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  restartProf() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.prof = false;
        this.stateProf = "actif";
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  }
