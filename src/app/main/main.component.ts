import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  openMenu: boolean = false

  toggleMenu() {
    this.openMenu ? this.openMenu = false : this.openMenu = true
  }

  constructor() { }

  ngOnInit(): void {

  }
}
