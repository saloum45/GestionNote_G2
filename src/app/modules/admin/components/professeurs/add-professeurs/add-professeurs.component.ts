import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from 'src/app/models/professeurs';
import { AllServiceService } from 'src/app/services/all-service.service';
import { SweetMessageService } from 'src/app/services/sweet-message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-professeurs',
  templateUrl: './add-professeurs.component.html',
  styleUrls: ['./add-professeurs.component.scss']
})
export class AddProfesseursComponent {
  // Liste des attributs
  switch !: number;
  prof!: boolean;
  stateProf = "actif";
  valseAdminProf = 2;
  listeprofesseurs!: any[];
  listMatieres!: any[];
  id: number = 0;
  image !: string;
  prenom !: string;
  nom !: string;
  mail !: string;
  tel !: string;
  classes: any;
  matiere: string = '';
  // classe: string = '';
  classesActives: any[] = [];


  // Methodes
  constructor(private service:AllServiceService,private message:SweetMessageService, private router:Router){

  }

  ngOnInit(): void {
    // this.listeprofesseurs = JSON.parse(localStorage.getItem('professeurs') || '[]');
    // this.listMatieres = JSON.parse(localStorage.getItem('matiere') || '[]');
    // this.listMatieres = this.listMatieres.filter((ele) => ele.etat == true);

    // this.classes = JSON.parse(localStorage.getItem('classes') || '[]');
    // this.classes.forEach((element: any) => {
    //   if (element.etat == 'actif') {
    //     this.classesActives.push(element);
    //   }
    // });
    this.service.getAll("classes",(reponse:any)=>{
      this.classes=reponse;
      reponse.forEach((element:any) => {
        if (element.etat=='actif') {
          this.classesActives.push(element);
        }
      });
    });
    this.service.getAll("matieres",(reponse:any)=>{
      this.listMatieres=[];
      // this.classes=reponse;
      reponse.forEach((element:any) => {
        if (element.etat=='actif') {
          this.listMatieres.push(element);
        }
      });
    });
  }

  viderChamps() {
    this.image = '';
    this.prenom = '';
    this.nom = '';
    this.mail = '';
    this.tel = '';
    this.classes = '';
    this.matiere = '';
  }

  ajouterProfesseur() {

    if (this.image == "" || this.prenom == "" || this.nom == "" || this.mail == "" || this.tel == "" || this.classes == "" || this.matiere == "") {
      this.message.simpleMessage("désolé", "Veuillez renseigner tous les champs", "error");

    }else{

      this.service.add("professeurs", {
        // matricule:this.matricule,
        image:"img",
        nom:this.nom,
        prenom:this.prenom,
        email:this.mail,
        telephone:this.tel,
        classeId:Number(this.classes),
        MatiereId:Number(this.matiere),
        pass:"passer1234",
        etat:"actif"
      }, (reponse: any) => {
        console.log(reponse);
        if (reponse) {
          this.message.simpleMessage("merci", "Insertion faite avec succes", "success");
        }
      });
      // this.router.navigate(['admin/listProfesseur']);
    }
    // this.message.simpleMessage("merci", "Insertion faite avec succes", "success");
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
