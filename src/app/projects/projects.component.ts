import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent implements OnInit {
  images = [];

  constructor(
    public project: ProjectsService, 
    public router: Router,
    private seoService: SeoService
  ) {
    this.project.items.forEach((item)  => {
      this.images.push(item.path);
    });
  }

  ngOnInit() {
    // Update SEO meta tags for projects page
    this.seoService.updateSEO(this.seoService.getProjectsSEO());
  }

  onSelect(image) {
    const link = `/projects/${image.text.toLowerCase()}`;
    image.showText = false;
    this.router.navigate([link]);
  }

}
