import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { PlayerListComponent } from './team/player-list/player-list.component';
import {DataService} from './services/data-service';
import {FirstLetterPipe} from './first-letter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    PlayerListComponent,
    FirstLetterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
