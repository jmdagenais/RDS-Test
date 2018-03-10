import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html'
})
export class PlayerListComponent implements OnInit {
  @Input() players: any[] = [{uniform_number: '18', first_name: 'Bob', last_name: 'Gratton', position: 'Centre'}];

  constructor() {

  }

  ngOnInit() {
    console.log('player list: ', this.players);
  }
}
