import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detailed-project',
  templateUrl: './detailed-project.component.html',
  styleUrls: ['./detailed-project.component.scss'],
  providers: [NgbCarouselConfig]  
})
export class DetailedProjectComponent implements OnInit {
  public selectedProject!: any;

  constructor(
    public projectCollection: ProjectsService,
    private route: ActivatedRoute,
    public config: NgbCarouselConfig,
    private location: Location) {
      config.interval = 0;
      this.projectCollection = projectCollection;
    }

  ngOnInit(): void {
    this.selectedProject = this.getProject();
    console.log('111', this.selectedProject);
  }

  getProject() {
    const projectName = this.route.snapshot.paramMap.get('projectName');
    const projectIndex = this.getProjectIndex(projectName);

    return this.projectCollection.items[projectIndex];
  }

  private getProjectIndex(projectName) {
    const project = this.projectCollection.items.filter(function(element: any) {
      return element.text.toLowerCase() === projectName;
    });
    return this.projectCollection.items.indexOf(project[0]);
  }

}
