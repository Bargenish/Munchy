import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {
  
  public items: any[] = [{ text: 'Order now!', path:''}, {text: 'Lucky', path:''}, {text: 'Munch', path:''},{text: 'Map', path:'map'}];
  public itemsManager: any[] = [{ text: 'Order now!'}, {text: 'Lucky'}, {text: 'Munch'},{text: 'Map'},{text: 'Statistics'},{text: 'Restaurants'}];

  constructor(private router: Router) {};

  ngOnInit() {
  }

}
