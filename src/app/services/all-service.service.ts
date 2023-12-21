import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  private urlBase = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  post(path: any, dataToSend: any, onSuccess: Function) {
    this.http.post(this.urlBase + path, dataToSend).subscribe((reponse: any) => {
      onSuccess(reponse);
    });
  }
  get(path: any, dataToSend: any, onSuccess: Function) {
    this.http.get(this.urlBase + path).subscribe((reponse: any) => {
      onSuccess(reponse);
    });
  }


  login(path: any, email: string, pass: string, onSuccess: Function) {
    this.http.get(`${this.urlBase + path}?filter={"where":{"email":"${email}","pass":"${pass}"}}`).subscribe((reponse: any) => {
      onSuccess(reponse);
    });
  }

  getById(path: any, id: number, onSuccess: Function) {
    this.http.get(`${this.urlBase + path}/?filter={"where":{"id":"${id}"}}`).subscribe(
      (reponse: any) => {
        onSuccess(reponse);
      }
    )
  }


  getAll(path: any, onSuccess: Function) {
    this.http.get(`${this.urlBase + path}`).subscribe(
      (reponse: any) => {
        onSuccess(reponse);
      }
    );
  }

  add(path: any, dataToSend: any, onSuccess: Function) {
    this.http.post(`${this.urlBase + path}`, dataToSend).subscribe(
      (reponse: any) => {
        onSuccess(reponse);
      }
    )
  }

  update(path: any,dataToSendId:any, dataToSend: any, onSuccess: Function) {
    this.http.put(`${this.urlBase + path}/${dataToSendId}`, dataToSend).subscribe(
      (reponse: any) => {
        onSuccess(reponse);
      }
    )
  }

  delete(path: any, id: number, onSuccess: Function) {
    this.http.delete(`${this.urlBase + path}/${id}`).subscribe(
      (reponse: any) => {
        onSuccess(reponse);
      }
    )
  }
}
