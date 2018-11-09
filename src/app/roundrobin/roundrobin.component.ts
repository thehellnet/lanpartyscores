import {Component, OnInit} from '@angular/core';
import {Match, MatchGametype, MatchStatus} from '../models/match.model';
import {Team} from '../models/team.model';

@Component({
  selector: 'app-roundrobin',
  templateUrl: './roundrobin.component.html',
  styleUrls: ['./roundrobin.component.scss']
})
export class RoundrobinComponent implements OnInit {

  MATCHES = [
    new Match(MatchGametype.TDM, 1, 'ALPHA', 'BRAVO', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.TDM, 2, 'CHARLIE', 'DELTA', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.TDM, 3, 'ALPHA', 'CHARLIE', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.TDM, 4, 'BRAVO', 'CHARLIE', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.TDM, 5, 'ALPHA', 'DELTA', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.TDM, 6, 'BRAVO', 'DELTA', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.SD, 1, 'ALPHA', 'BRAVO', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.SD, 2, 'CHARLIE', 'DELTA', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.SD, 3, 'ALPHA', 'CHARLIE', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.SD, 4, 'BRAVO', 'CHARLIE', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.SD, 5, 'ALPHA', 'DELTA', MatchStatus.SCHEDULED, 0),
    new Match(MatchGametype.SD, 6, 'BRAVO', 'DELTA', MatchStatus.SCHEDULED, 0)
  ];

  TEAMS = [
    new Team('ALPHA', 0),
    new Team('BRAVO', 0),
    new Team('CHARLIE', 0),
    new Team('DELTA', 0)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  public getSortedTeams() {
    return this.TEAMS.sort((a, b) => b.points - a.points);
  }
}
