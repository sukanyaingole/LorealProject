import{Component, NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({

    selector:'my-app',
    template:'<h1>This is Main.ts File'

})

 class FirstComponent{}

 @NgModule({
    declarations:[FirstComponent],
    imports:[BrowserModule],
    bootstrap:[FirstComponent]

 })

 class FirstModule{}

 platformBrowserDynamic().bootstrapModule(FirstModule);

