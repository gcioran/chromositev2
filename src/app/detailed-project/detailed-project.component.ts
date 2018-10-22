import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailed-project',
  templateUrl: './detailed-project.component.html',
  styleUrls: ['./detailed-project.component.scss']
})
export class DetailedProjectComponent implements OnInit {

  constructor(
    public projectCollection: ProjectsService,
    private route: ActivatedRoute,
    private location: Location) {
      this.projectCollection = projectCollection;
    }

  ngOnInit(): void {
    const project = this.getProject();
    console.log('111', project);
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
