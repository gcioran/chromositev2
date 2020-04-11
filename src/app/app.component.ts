import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ChromoLanguageService } from './chromo-language.service'
interface CookieDisclaimer {
  message: string,
  dismiss: string,
  link: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  private cookieDisclaimer: CookieDisclaimer= {} as CookieDisclaimer;


  constructor(
    public translate: TranslateService, 
    private language: ChromoLanguageService
    ) {
    translate.addLangs(['en', 'ro']);
    translate.setDefaultLang('ro');

    this.language.currentSelectedLanguage.subscribe(language => translate.use(language))
  }

  ngOnInit() {
    this.translate.get('load.cookies.link').subscribe((text:string) => {
      this.cookieDisclaimer.message = this.translate.instant("load.cookies.message")
      this.cookieDisclaimer.dismiss = this.translate.instant("load.cookies.dismiss")
      this.cookieDisclaimer.link = this.translate.instant("load.cookies.link")

      this.showCookieDisclaimer(this.cookieDisclaimer);
      });
  }

  private showCookieDisclaimer(cookie: CookieDisclaimer) {
    const cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "black"
        },
        button: {
          background: "#515e20",
          text: "black"
        }
      },
      theme: "classic",
      content: {
        message: cookie.message,
        dismiss: cookie.dismiss,
        link: cookie.link,
        href: "/cookie-policy", 
        target: '_self' 
      }
    });
  }
}
