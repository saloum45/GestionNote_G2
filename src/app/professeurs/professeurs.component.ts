import { Component, NgModule, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.scss']
})
export class ProfesseursComponent implements OnInit {
  
  switch !: number;
  prof!: boolean;
  stateProf = "actif";
  
  ngOnInit(): void {
  }

  showNote() {
    this.switch = 1;
  }

  showEvaluation() {
    this.switch = 2;
  }
  removeProf() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.prof = true;
        this.stateProf = "inactif";
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  restartProf() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.prof = false;
        this.stateProf = "actif";
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

}
