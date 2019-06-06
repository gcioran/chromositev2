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
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;
  
  constructor( private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
   }

  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      // this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

    });
  }
}
