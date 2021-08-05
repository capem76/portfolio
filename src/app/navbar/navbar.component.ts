import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Navbar } from './navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterContentInit {

 navbarJson: Navbar = new Navbar();

  constructor(  ) {
  }
  ngAfterContentInit(): void {
    // this.navbarJson.NAVBAR.LINKS = {};
   
  }

  ngOnInit(): void {
  }

}
