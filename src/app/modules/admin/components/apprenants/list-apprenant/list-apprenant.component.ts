import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-apprenant',
  templateUrl: './list-apprenant.component.html',
  styleUrls: ['./list-apprenant.component.scss']
})
export class ListApprenantComponent implements OnInit{
  apprenants:any;
  ngOnInit(): void {
    this.apprenants=JSON.parse(localStorage.getItem('apprenants') || '[]');
  }

}
