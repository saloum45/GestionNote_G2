import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'src/app/services/all-service.service';
import { SweetMessageService } from 'src/app/services/sweet-message.service';

@Component({
  selector: 'app-list-evaluation',
  templateUrl: './list-evaluation.component.html',
  styleUrls: ['./list-evaluation.component.scss']
})
export class ListEvaluationComponent implements OnInit {
  // verifierFormAjout: any;
  public date: any;
  public evaluations: any;
  public type: any;

  constructor(private service: AllServiceService, private message: SweetMessageService) {

  }
  ngOnInit(): void {

  }
  resetForm() {
    throw new Error('Method not implemented.');
  }
  verifierFormAjout() {
    if (this.date == "" || this.type == "") {
      this.message.simpleMessage('désolé', "veuillez renseigner tous les champs", "error");
    } else {
      this.service.add("evaluations", { date: this.date, type: this.type, classeId: 1, matiereId: 1,etat:"venir" }, (reponse: any) => {
        if (reponse) {
          console.log(reponse);
          this.message.simpleMessage("merci", "Insertion faite avec succes", "success");
          // if (reponse) {
          // }
        }
      })
    }
  }

}
