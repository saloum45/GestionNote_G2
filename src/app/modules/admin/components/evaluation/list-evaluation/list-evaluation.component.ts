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
  public date = "";
  public evaluations: any;
  public type = "";
  public onlineProfesseur: any;

  constructor(private service: AllServiceService, private message: SweetMessageService) {

  }
  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.onlineProfesseur = JSON.parse(localStorage.getItem('userOnline') || '[]');
    this.service.getByForeignId("evaluations",this.onlineProfesseur.user[0].classeId,(reponse:any)=>{
      this.evaluations = reponse;

    },"classeId");
  }
  resetForm() {
    this.date = "";
    this.type = "";
  }
  verifierFormAjout() {
    if (this.date == "" || this.type == "") {
      this.message.simpleMessage('désolé', "veuillez renseigner tous les champs", "error");
    } else {
      console.log({ date: this.date, type: this.type, classeId: this.onlineProfesseur.user[0].classeId, matiereId: this.onlineProfesseur.user[0].matiereId, etat: "venir" });
      this.service.add("evaluations", { date: this.date, type: this.type, classeId: this.onlineProfesseur.user[0].classeId, matiereId: this.onlineProfesseur.user[0].matiereId, etat: "venir" }, (reponse: any) => {
        if (reponse) {
          console.log(reponse);
          this.message.simpleMessage("merci", "Insertion faite avec succes", "success");
          this.resetForm();
          this.loadAll();
        }
      })
    }
  }

}
