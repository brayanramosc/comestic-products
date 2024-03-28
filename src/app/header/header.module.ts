import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { InfoComponent } from './info/info.component';
import { MenuComponent } from './menu/menu.component';
import { ManagementComponent } from './management/management.component';

@NgModule({
  declarations: [HeaderComponent, InfoComponent, MenuComponent, ManagementComponent],
  imports: [CommonModule],
  exports: [HeaderComponent]
})

export class HeaderModule { }
