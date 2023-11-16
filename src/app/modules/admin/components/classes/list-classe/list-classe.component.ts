import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.scss']
})
export class ListClasseComponent implements OnInit {
  classes:any;
  ngOnInit(): void {
    this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
  }
}
