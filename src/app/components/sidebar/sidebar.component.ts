import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface IListItem {
  name: string;
  visible: boolean;
  children?: IListItem[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private route: Router
  ) {
  }

  ngOnInit(): void {
  }

  goToRoute(route: string): void {
    this.route.navigate([route]);
  }
}
