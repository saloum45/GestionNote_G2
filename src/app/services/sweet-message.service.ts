import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetMessageService {

  constructor() { }
  simpleMessage(title:any,text:any,icon:any){
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
}
