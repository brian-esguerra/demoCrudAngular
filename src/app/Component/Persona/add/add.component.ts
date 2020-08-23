import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Person } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  person:Person = new Person();
  persons:Person[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getPersons()
    .subscribe(data =>{
      this.persons=data;
    });
  }

  savePerson(person:Person){
    console.log('person'+ JSON.stringify(person));

    if (person.name != undefined && person.lastname != undefined && person.email != undefined &&
        person.name != '' && person.lastname != '' && person.email != ''
      ) {
    
      const perF = new Person();
      perF.email = ''+person.personFather;

      const perM = new Person();
      perM.email = ''+person.personMother;

      person.personFather = perF;
      person.personMother = perM;
      console.log('person update'+ JSON.stringify(person));
      // service
      this.service.addPerson(person)
      .subscribe(data => {
        console.log('data insert', data);
        alert('Insert ok');
        this.router.navigate(["listPersons"]);
      });
    } else {
      alert('Datos incompletos');
    }
  }

}
