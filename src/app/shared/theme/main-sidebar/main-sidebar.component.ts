import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { MENUS } from './main-sidebar.constants';
import { Login } from 'src/app/login/login.model';
import { LoginService } from 'src/app/login/login.service';
import { SITE_TITLE } from '../../../config/config.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html'
})
export class MainSidebarComponent implements OnInit, AfterViewInit {

  public login: Login;
  public menusInitial = MENUS;
  public siteTitle = SITE_TITLE;

  constructor(
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.login = this.loginService.getLogin();
  }

  ngAfterViewInit() {
  }
}
