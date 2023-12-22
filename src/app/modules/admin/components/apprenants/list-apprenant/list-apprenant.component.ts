import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'src/app/services/all-service.service';
import { SweetMessageService } from 'src/app/services/sweet-message.service';

@Component({
  selector: 'app-list-apprenant',
  templateUrl: './list-apprenant.component.html',
  styleUrls: ['./list-apprenant.component.scss']
})
export class ListApprenantComponent implements OnInit{



  apprenants:any;


  // methodes
  constructor(private service:AllServiceService,private message:SweetMessageService){

  }
  ngOnInit(): void {
    this.apprenants=JSON.parse(localStorage.getItem('apprenants') || '[]');
    this.service.getAll("apprenants",(reponse:any)=>{
      this.apprenants=reponse;

    });
  }

  activeDesactive(faire:any,id:number){
    if (faire=="activer") {
      // alert('activer')
      this.apprenants.forEach((element:any) => {
        if (element.id==id) {
          element.etat="actif";
        }
      });
      localStorage.setItem('apprenants',JSON.stringify(this.apprenants));
    }else if(faire=="desactiver"){
      this.apprenants.forEach((element:any) => {
        if (element.id==id) {
          element.etat="desactif";
        }
      });
      localStorage.setItem('apprenants',JSON.stringify(this.apprenants));
      // this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
      // alert('desactiver')
    }
  }
}
