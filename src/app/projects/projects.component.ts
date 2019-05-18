import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  images = [];

  constructor(public project: ProjectsService, public router: Router) {
    this.project.items.forEach((item)  => {
      this.images.push(item.path);
  });
   }

  ngOnInit() {
  }

  onSelect(image) {
    const link = `/projects/${image.text.toLowerCase()}`;
    this.router.navigate([link]);
  }

}
