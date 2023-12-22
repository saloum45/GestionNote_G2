import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServiceService } from 'src/app/services/all-service.service';
import { SweetMessageService } from 'src/app/services/sweet-message.service';

@Component({
  selector: 'app-detail-evaluation',
  templateUrl: './detail-evaluation.component.html',
  styleUrls: ['./detail-evaluation.component.scss']
})
export class DetailEvaluationComponent implements OnInit  {
  public notes:any;
  public apprenants:any;
  public onlineProfesseur:any;
  constructor(private service:AllServiceService, private message:SweetMessageService, private activatedRoute:ActivatedRoute){
    // this.service.getAll("apprenants", (reponse: any) => {
    //   this.apprenants= reponse;

    // })


  }
  ngOnInit(): void {
    this.onlineProfesseur=JSON.parse(localStorage.getItem('userOnline')||'[]');
    this.service.getByForeignId("apprenants",this.onlineProfesseur.classeId,(reponse:any)=>{
      console.warn(reponse);
      this.apprenants=reponse;

    },"classeId");
  }

}
