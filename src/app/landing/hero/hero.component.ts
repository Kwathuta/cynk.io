import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  openMenu: boolean = false

  toggleMenu() {
    this.openMenu = !this.openMenu
    // this.openMenu ? this.openMenu = false : this.openMenu = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
