import { AfterContentInit, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Navbar } from './navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {

 navbarJson: Navbar = new Navbar();
  @ViewChildren('navbarUl') private navbarUlItems: QueryList<ElementRef>;
  @ViewChild('btnMenu') private btnMenu: ElementRef;
  private unListener!: () => void;

  constructor( private renderer2: Renderer2 ) {
  }
  
  
  ngAfterViewInit(): void {    
    this.navbarUlItems.forEach( ( navItem: ElementRef ) => {    
      this.unListener = this.renderer2.listen( navItem.nativeElement, 'click', (event) => {
        this.closeNavbar();
      })
    })
  }
  

  ngOnInit(): void {
  }

  public closeNavbar (): void {
    if( getComputedStyle( this.btnMenu.nativeElement ).display !== 'none' ){
      this.renderer2.selectRootElement( this.btnMenu.nativeElement, true ).click();
    }
    
  }

  ngOnDestroy(): void {
    this.unListener();
  }

}
