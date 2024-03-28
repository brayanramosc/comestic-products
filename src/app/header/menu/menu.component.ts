import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ``
})

export class MenuComponent {
  
  selectedIndex = 0;

  handleSelectOption(index: number) {
    this.selectedIndex = index;
  }

  menuOptions = [
    { id: 0, name: 'SHOP', link: '#' },
    { id: 1, name: 'ABOUT US', link: '#' },
    { id: 2, name: 'BEAUTY TIPS', link: '#' },
    { id: 3, name: 'BLOG', link: '#' },
    { id: 4, name: 'CONTACT', link: '#' },
  ]
}
