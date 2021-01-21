import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  time = new Date();

  constructor(
    private route: Router
  ) {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnInit(): void {
  }

  goToRoute(route: string): void {
    this.route.navigate([route]);
  }

}
