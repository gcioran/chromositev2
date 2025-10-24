import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    // Update SEO meta tags for home page
    this.seoService.updateSEO(this.seoService.getHomeSEO());
    
    // Add business structured data
    this.seoService.addStructuredData(this.seoService.getBusinessStructuredData());
  }

}
