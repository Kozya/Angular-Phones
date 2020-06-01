import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PhonesService, Phones } from "../phones.service";


@Component({
  selector: 'app-singl-phones',
  templateUrl: './singl-phones.component.html',
  styleUrls: ['./singl-phones.component.scss']
})
export class SinglPhonesComponent implements OnInit {

  phones: Phones

  constructor(
    private route: ActivatedRoute,
    private phonesService: PhonesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.phones = this.phonesService.getByName(params.name)

    })
  }
  clickImg(event: any) {
    let target = event.target;
    let index = target.src;
    this.phones.imageTitle = index;

  }



}

