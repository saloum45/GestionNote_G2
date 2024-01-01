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
  }

  attribuerNote() {

    let allNotes = document.querySelectorAll('input');
    let apprennatNotes: any[] = [];
    this.apprenants.forEach((elementApp: any, index: any) => {
      let obj = {
        apprenant: elementApp,
        note: allNotes[index].value
      };
      apprennatNotes.push(obj);
    });
    // console.log(element.value);
    // console.warn("data",{evaluationId:5,apprenantId:elementApp.id,note:Number(element.value)});
    console.warn("appnoote", apprennatNotes);
    apprennatNotes.forEach((element:any)=>{
      this.service.add("notes",{evaluationId:5,apprenantId:element.apprenant.id,note:Number(element.note)},(reponse:any)=>{
        console.log(reponse);
      });

    })
  }

}
