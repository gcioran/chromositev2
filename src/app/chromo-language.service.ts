import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChromoLanguageService {
  private languageSource = new BehaviorSubject('en');
  currentSelectedLanguage = this.languageSource.asObservable();

  constructor() { }
  
  changeLanguage(language: string) {
    this.languageSource.next(language)
  }
}
