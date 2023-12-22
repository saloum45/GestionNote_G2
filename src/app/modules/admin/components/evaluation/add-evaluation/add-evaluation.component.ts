import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'src/app/services/all-service.service';
import { SweetMessageService } from 'src/app/services/sweet-message.service';

@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.scss']
})
export class AddEvaluationComponent implements OnInit {
  // Attributs
  classesActives: any;
  classe: any;
  matiere: any;
  date: any;

  // Methodes
  constructor(private service: AllServiceService, private message: SweetMessageService) {

  }
  ngOnInit(): void {

    this.service.getAll("classes", (reponse: any) => {
      this.classesActives = reponse;
    });
    this.service.getAll("matieres", (reponse: any) => {
      this.matiere = reponse;
    });
  }
  verifierFormAjout() {
    throw new Error('Method not implemented.');
  }
  resetForm() {
    throw new Error('Method not implemented.');
  }


}
