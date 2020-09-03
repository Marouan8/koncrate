import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  rowsPosts = 4;
  rowsServices = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
