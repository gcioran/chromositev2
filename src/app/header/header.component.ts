import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ChromoLanguageService } from '../chromo-language.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private dispayedLanguage: string;
  public currentLanguage: string;

  constructor(private translate: TranslateService, private languageService: ChromoLanguageService) {
  }

  ngOnInit() {
    this.languageService.currentSelectedLanguage.subscribe(language => this.currentLanguage = language);
    this.updateDisplayedLanguage();
  }

  public changeLanguage() {
    const newLanguage = this.currentLanguage  === 'ro' ? 'en' : 'ro';
    
    this.languageService.changeLanguage(newLanguage);
    this.updateDisplayedLanguage();
  };

  private updateDisplayedLanguage() {
    this.dispayedLanguage = this.currentLanguage  === 'ro' ? 'en' : 'ro';
  }
}
