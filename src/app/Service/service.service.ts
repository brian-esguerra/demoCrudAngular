import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/apiDemo/personas';

  getPersons(){
    return this.http.get<Person[]>(this.Url);
  }

  addPerson(person:Person){
    return this.http.post<Person>(this.Url, person);
  }
}
