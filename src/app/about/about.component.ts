import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    // Update SEO meta tags for about page
    this.seoService.updateSEO(this.seoService.getAboutSEO());
    
    // Add person structured data for Dana Cioran
    const personStructuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dana Cioran",
      "jobTitle": "Architect",
      "worksFor": {
        "@type": "Organization",
        "name": "Chromosome Studio Architecture"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Timișoara",
        "addressCountry": "Romania"
      },
      "url": "https://chromostudio.ro/about"
    };
    
    this.seoService.addStructuredData(personStructuredData);
  }

}