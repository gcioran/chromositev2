import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title: string = 'My first AGM project';
  latitude: number = 45.715836;
  longitude: number = 21.138463;
  zoom =15;
  address: string;
  iconUrl= {
    url: 'images/marker_black.png',
    labelOrigin: {x:5, y:-20}
  };
  labelOptions = {
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
    text: "Chromosome Studio"
}

  @ViewChild('search')
  public searchElementRef: ElementRef;
  
  constructor() {
   }

  ngOnInit() {
  }
}
