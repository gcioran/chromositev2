import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ChromoLanguageService } from './chromo-language.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public translate: TranslateService, private language: ChromoLanguageService) {
    translate.addLangs(['en', 'ro']);
    translate.setDefaultLang('ro');

    this.language.currentSelectedLanguage.subscribe(language => translate.use(language))
  }
}
