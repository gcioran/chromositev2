import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { MapsAPILoader, MouseEvent } from '@agm/core';
// import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
mapOptions: google.maps.MapOptions = {
  center: { lat: 45.715836, lng: 21.138463},
  zoom : 15
}
marker = {
  position: { lat: 45.715836, lng: 21.138463 },
  label: {
    color: 'black',
    text: 'Chromosome architecture',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  icon: {
    url: 'images/marker_black.png',
    labelOrigin: {x:50, y:-40}
  },
  title: 'Marker title ',
  options: { animation: google.maps.Animation.DROP },

}

  // @ViewChild('search', { static: false })
  // public searchElementRef: ElementRef;

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef; 
  
  constructor() {
   }

  ngOnInit() {
  }
}
