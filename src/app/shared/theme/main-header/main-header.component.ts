import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public logout() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
