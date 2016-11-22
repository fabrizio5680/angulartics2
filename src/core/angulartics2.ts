import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class Angulartics2 {

  public settings: any = {
    pageTracking: {
      autoTrackVirtualPages: true,
      basePath: '',
      excludedRoutes: []
    },
    eventTracking: {},
    developerMode: false
  };

  /*
    @Param: ({url: string, location: Location})
   */
  public pageTrack: ReplaySubject<any> = new ReplaySubject();

  /*
    @Param: ({action: any, properties: any})
   */
  public eventTrack: ReplaySubject<any> = new ReplaySubject();

  /*
    @Param: (properties: any)
   */
  public exceptionTrack: ReplaySubject<any> = new ReplaySubject();

  /*
    @Param: (alias: string)
   */
  public setAlias: ReplaySubject<any> = new ReplaySubject();

  /*
    @Param: (userId: string)
   */
  public setUsername: ReplaySubject<any> = new ReplaySubject();

  /*
    @Param: ({action: any, properties: any})
   */
  public setUserProperties: ReplaySubject<any> = new ReplaySubject();

  /*
    @Param: (properties: any)
   */
  public setUserPropertiesOnce: ReplaySubject<any> = new ReplaySubject();

  /*
    @Param: (properties: any)
   */
  public setSuperProperties: ReplaySubject<any> = new ReplaySubject();

  /*
    @Param: (properties: any)
   */
  public setSuperPropertiesOnce: ReplaySubject<any> = new ReplaySubject();

  /*
    @Param: (properties: any)
   */
  public userTimings: ReplaySubject<any> = new ReplaySubject();

  constructor() {
    // this.trackLocation(location, router);
  }

  virtualPageviews(value: boolean) {
    this.settings.pageTracking.autoTrackVirtualPages = value;
  }
  excludeRoutes(routes: Array<string>) {
    this.settings.pageTracking.excludedRoutes = routes;
  }

  developerMode(value: boolean) {
    this.settings.developerMode = value;
  }
}
