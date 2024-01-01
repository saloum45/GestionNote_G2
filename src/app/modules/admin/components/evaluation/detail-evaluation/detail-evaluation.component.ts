import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServiceService } from 'src/app/services/all-service.service';
import { SweetMessageService } from 'src/app/services/sweet-message.service';

@Component({
  selector: 'app-detail-evaluation',
  templateUrl: './detail-evaluation.component.html',
  styleUrls: ['./detail-evaluation.component.scss']
})
export class DetailEvaluationComponent implements OnInit {
  public notes: any;
  public apprenants: any;
  public onlineProfesseur: any;
  constructor(private service: AllServiceService, private message: SweetMessageService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.onlineProfesseur = JSON.parse(localStorage.getItem('userOnline') || '[]');
    this.service.getByForeignId("apprenants", this.onlineProfesseur.user[0].classeId, (reponse: any) => {
      console.warn(reponse);
      this.apprenants = reponse;
    }, "classeId");

    this.service.getByForeignId("notes", +this.activatedRoute.snapshot.params['id'], (reponse: any) => {
      console.warn(reponse);
      this.notes = reponse;
      if (this.notes.length > 0) {

        let allNotes = document.querySelectorAll('input');
        allNotes.forEach((element: any, index) => {
          element.value = this.notes[index].note;
        });
      }
    }, "evaluationId");
  }

  attribuerNote() {

    let allNotes = document.querySelectorAll('input');
    let apprenantNotes: any[] = [];
    this.apprenants.forEach((elementApp: any, index: any) => {
      let obj = {
        apprenant: elementApp,
        note: allNotes[index].value
      };
      apprenantNotes.push(obj);
    });
    // console.log(element.value);
    // console.warn("data",{evaluationId:5,apprenantId:elementApp.id,note:Number(element.value)});
    console.warn("appnoote", apprenantNotes);
    this.service.getByForeignId("notes", +this.activatedRoute.snapshot.params['id'], (reponse: any) => {
      console.warn(reponse);
      let notesTest: any;
      notesTest = reponse;
      if (notesTest.length == 0) {
        apprenantNotes.forEach((element: any) => {
          this.service.add("notes", { evaluationId: +this.activatedRoute.snapshot.params['id'], apprenantId: element.apprenant.id, note: Number(element.note) }, (reponse: any) => {
            console.log(reponse);
            this.message.simpleMessage("merci", "les notes ont étées attribuées avec succès", "success");
          });

        });
      } else {
        apprenantNotes.forEach((element: any,index) => {
          this.service.update("notes",notesTest[index].id, { evaluationId: +this.activatedRoute.snapshot.params['id'], apprenantId: element.apprenant.id, note: Number(element.note) }, (reponse: any) => {
            console.log(reponse);
            this.message.simpleMessage("merci", "les notes ont étées attribuées avec succès", "success");
          });

        });
      }
    }, "evaluationId");
  }

}
