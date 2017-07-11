import { Injectable } from '@angular/core';

import { Camper } from './camper';
import { RECENT } from './mock-recent';
import { ALLTIME } from './mock-alltime';

@Injectable()
export class Top100Service {
  getRecent(): Camper[] {
    return RECENT;
  }

  getAlltime(): any {
    return ALLTIME;
  }
}
