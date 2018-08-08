import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {
  
  //public items: any[] = [{ text: 'Order now!', path:''}, {text: 'Lucky', path:''}, {text: 'Munch', path:''},{text: 'Map', path:'map'}];
  public items: any[] = [{ text: 'Order now!', path:''}, {text: 'Lucky', path:''}, {text: 'Munch', path:''},{text: 'Map', path:'map'},{text: 'Statistics', path:'statistics'},{text: 'Restaurants', path:'restaurants'}];

  constructor(private router: Router) {};

  ngOnInit() {
  }

}
