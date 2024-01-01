import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServiceService } from 'src/app/services/all-service.service';
import { SweetMessageService } from 'src/app/services/sweet-message.service';

@Component({
  selector: 'app-mes-evaluations',
  templateUrl: './mes-evaluations.component.html',
  styleUrls: ['./mes-evaluations.component.scss']
})
export class MesEvaluationsComponent implements OnInit {
  // Attributs
  public evaluationNote: any[]=[];
  public notes: any;
  public evaluations: any[]=[];
  onlineProfesseur: any;
  constructor(private service: AllServiceService, private message: SweetMessageService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.onlineProfesseur = JSON.parse(localStorage.getItem('userOnline') || '[]');
    this.service.getByForeignId("evaluations", this.onlineProfesseur.user[0].classeId, (reponse: any) => {
      this.evaluations = reponse;
      console.warn('ev', this.evaluations);

    }, "classeId");
    this.service.getByForeignId("notes", this.onlineProfesseur.user[0].id, (reponse: any) => {
      this.notes = reponse;
      console.warn('nt', this.notes);

    }, "apprenantId");

  }
}
