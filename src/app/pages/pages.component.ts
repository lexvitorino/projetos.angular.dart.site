import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'sidebar-mini layout-footer-fixed';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
