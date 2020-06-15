import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent
  ],
  exports: [
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent
  ]
})
export class ThemeModule {
}
