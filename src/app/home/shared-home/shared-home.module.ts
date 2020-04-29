import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedHomeRoutingModule } from './shared-home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedHomeRoutingModule
  ]
})
export class SharedHomeModule { }
