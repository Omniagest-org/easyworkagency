import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface MapLocation {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-locations-map',
  template: '<div #mapContainer class="locations-map"></div>',
  styles: [
    `
      .locations-map {
        width: 100%;
        height: 100%;
        min-height: 22rem;
        border-radius: 0.75rem;
        overflow: hidden;
      }
    `,
  ],
})
export class LocationsMap implements AfterViewInit, OnDestroy {
  @Input({ required: true }) locations: MapLocation[] = [];

  @ViewChild('mapContainer', { static: true }) private readonly mapContainer!: ElementRef<HTMLElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private map: import('leaflet').Map | undefined;

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId) || this.locations.length === 0) {
      return;
    }

    const L = await import('leaflet');

    const icon = L.icon({
      iconUrl: '/leaflet/marker-icon.png',
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      shadowUrl: '/leaflet/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    const map = L.map(this.mapContainer.nativeElement, {
      scrollWheelZoom: false,
    });
    this.map = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    const markers = this.locations.map((location) =>
      L.marker([location.lat, location.lng], { icon }).bindPopup(`<strong>${location.name}</strong><br>${location.address}`),
    );

    const group = L.featureGroup(markers).addTo(map);
    map.fitBounds(group.getBounds().pad(0.25));
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
