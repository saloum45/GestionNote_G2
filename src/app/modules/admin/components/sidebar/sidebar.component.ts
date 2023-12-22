import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetMessageService } from 'src/app/services/sweet-message.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public whosOnline:any;
  constructor(private router:Router,private message:SweetMessageService){

  }
  ngOnInit(): void {
    this.whosOnline=JSON.parse(localStorage.getItem('userOnline')??'[]').role;
    // console.warn(this.whosOnline);
    // console.warn(this.whosOnline.role);
  }
 alerter(){
  // alert('hello');
 }

 deconnexion(){
  localStorage.removeItem('userOnline');
  this.router.navigate(['login']);
  this.message.simpleMessage("au revoir","déconnexion faite avec succéss","success");
 }
}
