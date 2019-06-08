import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ChromoLanguageService } from '../chromo-language.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public key: string;

  constructor(private translate: TranslateService, private language: ChromoLanguageService) {
  }

  public changeLanguage() {
    this.translate.use(this.key);
    var newLanguage = this.key  === 'en' ? 'ro' : 'en';
    this.language.changeLanguage(newLanguage);
  };

  ngOnInit() {
    this.language.currentSelectedLanguage.subscribe(language => this.key = language);
  }

}
