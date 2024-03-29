import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [FooterComponent, NewsletterComponent],
  imports: [CommonModule],
  exports: [FooterComponent]
})

export class FooterModule { }
