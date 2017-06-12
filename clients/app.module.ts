import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UpgradeModule} from '@angular/upgrade/static';

@NgModule({
  imports: [BrowserModule, UpgradeModule]
})
export class AppModule {
  // constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    console.log("ngDoBootstrap");
  }
}

export function bootstrapPowerBiNew() {
  console.log("bootstrapPowerBiNew is invoked");
  platformBrowserDynamic().bootstrapModule(AppModule);
}