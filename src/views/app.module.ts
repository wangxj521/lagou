import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app';

import { HomeComponent } from './home/home';
import { DetailsComponent } from './details/details';
import { LoginComponent } from './login/login';
import { MainComponent } from './main/main';

import { HistoryBackDirective } from '../directives/history-back';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        DetailsComponent,
        LoginComponent,
        MainComponent,
        HistoryBackDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
