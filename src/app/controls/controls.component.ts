import { Component } from '@angular/core';
import { PHONES } from "src/assets/linkphones";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  phones: any[] = PHONES;
  title = 'Angular-Phones';


  searchPhone(event: any) {
    const value = event.target.value;

    let result = [];

    for (let i = 0; i < PHONES.length; i++) {
      let el = PHONES[i].name;

      if (el.toLowerCase().indexOf(value.toLowerCase()) != -1) {
        result.push(PHONES[i]);
      }

    }
    this.phones = result;
  }


  sort(event: any) {
    const value = event.target.value;

    if (value == "1") {
      let newPhones = PHONES.sort(function (a, b) {
        return a.age - b.age;
      });
      this.phones = newPhones;
    }
    else {
      let newPhones = PHONES.sort(function (a, b) {
        let nameA = a.name.toLocaleLowerCase(),
          nameB = b.name.toLocaleLowerCase();
        if (nameA < nameB) {
          return - 1;
        }
        if (nameA > nameB) {
          return 1;
        }
      });
      this.phones = newPhones;
    }

  }



}
