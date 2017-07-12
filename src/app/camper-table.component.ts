import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Camper } from './camper';
import { Top100Service } from './top-100.service';

@Component({
  selector: 'camper-table',
  templateUrl: './camper-table.component.html',
  styleUrls: ['./camper-table.component.css'],
  providers: [Top100Service]
})
export class CamperTableComponent implements OnInit {
  campers: Camper[] = null;

  constructor(
    private top100Service: Top100Service,
    private route: ActivatedRoute
  ) { };

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        // This causes the table to not render while we wait
        this.campers = null;

        if (params.get('set') == 'recent') {
          return this.top100Service.getRecent();
        }
        else if (params.get('set') == 'alltime') {
          return this.top100Service.getAlltime();
        }
        // TODO add else block for invalid param values
      })
      .subscribe(campers => this.campers = campers);
  }
}
