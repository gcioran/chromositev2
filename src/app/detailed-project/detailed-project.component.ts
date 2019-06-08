import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ChromoLanguageService } from '../chromo-language.service'

@Component({
  selector: 'app-detailed-project',
  templateUrl: './detailed-project.component.html',
  styleUrls: ['./detailed-project.component.scss'],
  providers: [NgbCarouselConfig]  
})
export class DetailedProjectComponent implements OnInit {
  @ViewChild('carousel') carousel: NgbCarousel;
  public selectedProject!: any;
  public showRomanian =true;

  constructor(
    public projectCollection: ProjectsService,
    private route: ActivatedRoute,
    private language: ChromoLanguageService,
    public config: NgbCarouselConfig,
    private location: Location) {
      config.interval = 0;
      this.projectCollection = projectCollection;
    }

  ngOnInit(): void {
    this.selectedProject = this.getProject();
    this.language.currentSelectedLanguage.subscribe(language => this.showRomanian = language === 'en');
    console.log('111', this.selectedProject);
  }

  public getProject() {
    const projectName = this.route.snapshot.paramMap.get('projectName');
    const projectIndex = this.getProjectIndex(projectName);

    return this.projectCollection.items[projectIndex];
  }

  public setDrawingsActive() {
    this.carousel.select(this.selectedProject.drawings.toString());
  };
  public setImagesActive = function() {
    this.carousel.select('0');
  };
  public setDescriptionActive() {
    console.log('FFFF');
     var index = this.selectedProject.src.length -1;
     var stringIndex: string = index.toString();
     console.log('V',stringIndex);
     this.carousel.select(stringIndex);
   };
   public hasDescription() {
     var index = this.selectedProject.src.length -1;
     return !!this.selectedProject.src[index].text;
   };

  private getProjectIndex(projectName) {
    const project = this.projectCollection.items.filter(function(element: any) {
      return element.text.toLowerCase() === projectName;
    });
    return this.projectCollection.items.indexOf(project[0]);
  }

}
