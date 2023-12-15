import { Component } from '@angular/core';

@Component({
  selector: 'app-outstanding-payments',
  templateUrl: './outstanding-payments.component.html',
  styleUrls: ['./outstanding-payments.component.scss']
})
export class OutstandingPaymentsComponent {
 
  items = [{
    "id": 1,
    "name": "Jairo Martin Velazquez Roa",
    "ci": "26502212",
    "gender": "Masculino",
    "fifaid": "1111AAAA",
    "birthdate": "01/01/1988"
},
{
    "id": 2,
    "name": "Manuel Angel Rodriguez Pera",
    "ci": "26502213",
    "gender": "Masculino",
    "fifaid": "1111AAAB",
    "birthdate": "02/01/1988"
},
{
    "id": 3,
    "name": "Angel Manuel Paez Paez",
    "ci": "26502214",
    "gender": "Masculino",
    "fifaid": "1111AAAC",
    "birthdate": "03/01/1988"
},
{
    "id": 4,
    "name": "Manuel Felipe Hernandez Hernandez",
    "ci": "26502215",
    "gender": "Masculino",
    "fifaid": "1111AAAD",
    "birthdate": "04/01/1988"
},
{
    "id": 5,
    "name": "Salomon Jesus Rodriguez Perez",
    "ci": "26502216",
    "gender": "Masculino",
    "fifaid": "1111AAAE",
    "birthdate": "05/01/1988"
},
{
    "id": 6,
    "name": "Anthony Mario Hernandez Sanchez",
    "ci": "26502216",
    "gender": "Masculino",
    "fifaid": "1111AAAF",
    "birthdate": "06/01/1988"
},
{
    "id": 7,
    "name": "Damian Alex Cardona Perez",
    "ci": "26502217",
    "gender": "Masculino",
    "fifaid": "1111AAAG",
    "birthdate": "07/01/1988"
},
{
    "id": 8,
    "name": "Mauricio Alejandro Gonzalez Pereira",
    "ci": "26502218",
    "gender": "Masculino",
    "fifaid": "1111AAAH",
    "birthdate": "08/01/1988"
},
{
    "id": 9,
    "name": "Mario Hugo Piñango Solano",
    "ci": "26502218",
    "gender": "Masculino",
    "fifaid": "1111AAAI",
    "birthdate": "09/01/1988"
},
{
    "id": 10,
    "name": "Luigi Wuilker Escalona Nuñez",
    "ci": "26502219",
    "gender": "Masculino",
    "fifaid": "1111AAAJ",
    "birthdate": "10/01/1988"
}]

  constructor(){}

}
