import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Attributs
  public email = "";
  public pass = "";

  // Methodes
  constructor(private router: Router, private service: AllServiceService) {

  }
  connexion() {
    this.service.login("admins", this.email, this.pass, (reponse: any) => {
      console.log(reponse);
    })
    // this.router.navigate(['admin']);
  }
}
