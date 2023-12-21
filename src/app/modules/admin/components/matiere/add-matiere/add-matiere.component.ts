import { SweetMessageService } from 'src/app/services/sweet-message.service';
import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/app/models/matiere';
import { AllServiceService } from 'src/app/services/all-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.scss']
})
export class AddMatiereComponent implements OnInit {
  id: number = 0;
  libelle!: string;
  matieres!: any[];
  etat: boolean = true;
  cleId = false;
  editMatiere: boolean = false;
  matiereEdit!: any[];


  // Methodes
  constructor(private service: AllServiceService, private message: SweetMessageService) {

  }
  ngOnInit(): void {
    // this.matieres = JSON.parse(localStorage.getItem('matiere') || '[]');
    this.chargerMatiere();
  }

  chargerMatiere(){

    this.service.getAll("matieres",(reponse:any)=>{
      this.matieres=reponse;
    });
  }
  viderChamps() {
    this.libelle = "";
  }

  changeState(param: number) {
    this.matieres.forEach(element => {
      if (element.id == param) {
        element.etat = !element.etat;
        this.editMatiere = false;
        localStorage.setItem('matiere', JSON.stringify(this.matieres));
      }
    });
  }
  editeurMatiere(param: number) {
    // this.matieres.forEach(element => {
    //   if (element.id == param) {
    //     this.matiereEdit = this.matieres.filter((ele) => ele.id == param);
    //     this.editMatiere = true;
    //     // this.cleId = element.id;
    //   }
    // });
  }
  resetForm() {
    this.editMatiere = false;
  }
  addMatiere() {
    this.service.add("matieres", { libelle: this.libelle, etat: "actif" }, (reponse: any) => {
      console.log(reponse);
      if (reponse) {
        this.message.simpleMessage("merci", "Insertion faite avec succes", "success");
      }
    });
    this.chargerMatiere();
    this.viderChamps();
  }
}
