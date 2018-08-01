import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {
  
  public items: any[] = [{ text: 'Order now!', url: "https://www.google.com"}, {text: 'Lucky'}, {text: 'Munch'},{text: 'Map'}];
  public itemsManager: any[] = [{ text: 'Order now!'}, {text: 'Lucky'}, {text: 'Munch'},{text: 'Map'},{text: 'Statistics'},{text: 'Restaurants'}];

  constructor() { }

  ngOnInit() {
  }

}
