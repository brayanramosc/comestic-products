import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from './header/header.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'comestic-products';
}
