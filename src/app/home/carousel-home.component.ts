import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../projects.service';

@Component({
    selector: 'app-carousel-home',
    templateUrl: './carousel-home.html',
    providers: [NgbCarouselConfig]
})

export class HomeCarouselComponent implements OnInit{
    projectCover;
    images = [];

    constructor(config: NgbCarouselConfig, public project: ProjectsService) {
        config.interval = 10000000;
        config.pauseOnHover = false;
        config.showNavigationIndicators = false;

        this.project.items.forEach((item)  => {
            this.images.push(item.path);
        });
    }

    ngOnInit() {
      }
}
