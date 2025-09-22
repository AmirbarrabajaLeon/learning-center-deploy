import {Component, inject, signal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Home} from './shared/presentation/views/home/home';
import {About} from './shared/presentation/views/about/about';
import {PageNotFound} from './shared/presentation/views/page-not-found/page-not-found';
import {FooterContent} from './shared/presentation/components/footer-content/footer-content';

@Component({
  selector: 'app-root',
  imports: [
    Home,
    About,
    PageNotFound,
    FooterContent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning-center');
  private translate: TranslateService;

  constructor() {
    this.translate = inject(TranslateService);
    this.translate.addLangs(['en', 'es']);
    this.translate.use('en');
  }
}
