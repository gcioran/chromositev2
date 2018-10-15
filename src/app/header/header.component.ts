import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public key: string;

  constructor(private translate: TranslateService) {
    this.key = 'en';
    this.translate = translate;
  }

  public changeLanguage() {
    this.translate.use(this.key);
    this.key = this.key  === 'en' ? 'ro' : 'en';
  };

  ngOnInit() {
  }

}
