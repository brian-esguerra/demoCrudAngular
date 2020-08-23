import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../Service/service.service'
import { Person } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  persons:Person[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {

    this.service.getPersons()
    .subscribe(data =>{
      this.persons=data;
    });
  }

}
