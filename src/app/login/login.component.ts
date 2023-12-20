import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllServiceService } from '../services/all-service.service';
import { SweetMessageService } from '../services/sweet-message.service';

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
  constructor(private router: Router, private service: AllServiceService, private message: SweetMessageService) {

  }
  connexion() {
    if (this.email == "" || this.pass == "") {
      this.message.simpleMessage("Désolé!!!", "Veuillez renseigner tous les champs", "error");

    } else {

      this.service.login("admins", this.email, this.pass, (reponse: any) => {
        console.log("admins", reponse);
        if (reponse.length == 0) {
          this.service.login("apprenants", this.email, this.pass, (reponse: any) => {
            console.log("apprenants", reponse);
            if (reponse.length == 0) {
              this.service.login("professeurs", this.email, this.pass, (reponse: any) => {
                console.log("professeurs", reponse);
                if (reponse.length == 0) {
                  this.message.simpleMessage("Désolé!!!", "Mot de passe ou email incorrect", "error");
                } else {
                  this.saveLogin(reponse, "professeur");

                  this.message.simpleMessage("Bienvenue!!!", "Connexion faite avec succès", "success");
                }

              })
              // this.message.simpleMessage("Désolé!!!", "Mot de passe ou email incorrect", "error");
            } else {
              this.saveLogin(reponse, "apprenant");

              this.message.simpleMessage("Bienvenue!!!", "Connexion faite avec succès", "success");
            }

          })
          // this.message.simpleMessage("Désolé!!!", "Mot de passe ou email incorrect", "error");
        } else {
          this.saveLogin(reponse, "admin");
          this.message.simpleMessage("Bienvenue!!!", "Connexion faite avec succès", "success");
        }

      })
    }
    // this.router.navigate(['admin']);
  }
  saveLogin(element: any, role: any) {
    let user = {
      user: element,
      role: role
    }
    this.router.navigate(['admin']);
    localStorage.setItem('userOnline', JSON.stringify(user));

  }
}
