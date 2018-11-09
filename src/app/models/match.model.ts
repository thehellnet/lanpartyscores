export enum MatchGametype {
  TDM = 'TDM',
  SD = 'SD'
}

export enum MatchStatus {
  SCHEDULED = 'Da fare',
  PLAYING = 'In corso',
  FINISHED = 'Terminato'
}

export class Match {

  private _gametype: MatchGametype;
  private _num: number;
  private _firstTeam: string;
  private _secondTeam: string;
  private _status: MatchStatus = MatchStatus.SCHEDULED;
  private _winner = 0;

  constructor(gametype: MatchGametype,
              num: number,
              firstTeam: string,
              secondTeam: string,
              status: MatchStatus = MatchStatus.SCHEDULED,
              winner = 0) {
    this._gametype = gametype;
    this._num = num;
    this._firstTeam = firstTeam;
    this._secondTeam = secondTeam;
    this._status = status;
    this._winner = winner;
  }

  get gametype(): MatchGametype {
    return this._gametype;
  }

  set gametype(value: MatchGametype) {
    this._gametype = value;
  }

  get num(): number {
    return this._num;
  }

  set num(value: number) {
    this._num = value;
  }

  get firstTeam(): string {
    return this._firstTeam;
  }

  set firstTeam(value: string) {
    this._firstTeam = value;
  }

  get secondTeam(): string {
    return this._secondTeam;
  }

  set secondTeam(value: string) {
    this._secondTeam = value;
  }

  get status(): MatchStatus {
    return this._status;
  }

  set status(value: MatchStatus) {
    this._status = value;
  }

  get winner(): number {
    return this._winner;
  }

  set winner(value: number) {
    this._winner = value;
  }
}
