import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false,
    imports: [GoogleMap, MapMarker]
})
export class ContactComponent implements OnInit {

  options: google.maps.MapOptions = {
    mapId: "ChromoMap",
    center: { lat: 45.74684016857803, lng: 21.210429609128504 },
    zoom: 16,
  };

  markerPosition: google.maps.LatLngLiteral = { lat: 45.74689451831178, lng: 21.210340820656977 };
  markerLabel: google.maps.MarkerLabel = {
    text: 'Chromosome Studio',
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold'
  };
  markerIcon: google.maps.Icon = {
    url: 'images/marker_black.png',
    labelOrigin: new google.maps.Point(5, -20)
  };

  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;
  
  constructor() {
   }

  ngOnInit() {
  }
}