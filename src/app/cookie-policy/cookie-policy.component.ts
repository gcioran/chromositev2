import { Component, OnInit } from '@angular/core';
import { ChromoLanguageService } from '../chromo-language.service';


@Component({
  selector: 'cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})

export class CookiePolicyComponent implements OnInit {
    showRomanian = true;

    constructor(private language: ChromoLanguageService) {}
    
    ngOnInit() {
      this.language.currentSelectedLanguage.subscribe(language => this.showRomanian = language !== 'en');
    }
}