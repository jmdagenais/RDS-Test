import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data-service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  attaquants: any[] = [];
  defenseurs: any[] = [];
  gardiens: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    let teamInfo: any = this.dataService.getData();
    teamInfo.roster.forEach((player) => {
      if (player.position === 'Centre' ||
        player.position === 'Ailier Droit' ||
        player.position === 'Ailier Gauche') {
          this.attaquants.push(player);
      } else if (player.position === 'Défenseur') {
        this.defenseurs.push(player);
      } else {
        this.gardiens.push(player);
      }
    });

    this.attaquants.sort(this.sortByName);
    this.defenseurs.sort(this.sortByName);
    this.gardiens.sort(this.sortByName);

    console.log('attaquants lengh', this.attaquants.length);
  }

  sortByName(p1: any, p2: any) {
    if (p1.last_name < p2.last_name) {
      return -1;
    } else if (p1.last_name > p2.last_name) {
      return 1;
    } else {
      return 0;
    }
  }

}
