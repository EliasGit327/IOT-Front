import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SideNavOptions } from './services/side-nav-service/classes/side-nav-options';
import { MatDrawer } from '@angular/material/sidenav';
import { SideNavService } from './services/side-nav-service/side-nav.service';
import { ThemeService } from './services/theme-service/theme.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') drawer: MatDrawer;

  title = 'IOT';
  sideNavOptions: SideNavOptions;
  private isSidenavOpened = false;

  constructor(
    private sideNavService: SideNavService,
    public themeService: ThemeService,
    private localStorageService: LocalStorageService,
  ) {
    this.sideNavOptions = this.sideNavService.sideNavOptions;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sideNavService.drawer = this.drawer;
  }

  headerMenuBtnClick(): void {
    this.isSidenavOpened = !this.isSidenavOpened;
    this.localStorageService.isSidenavOpened.value = this.isSidenavOpened;
    this.drawer.toggle();
  }
}
