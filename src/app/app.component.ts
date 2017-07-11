import { Component, OnInit } from '@angular/core';
import { Camper } from './camper';
import { Top100Service } from './top-100.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Top100Service]
})
export class AppComponent implements OnInit {
  title = 'Camper Leaderboard';
  recent: Camper[] = null;
  alltime: Camper[] = null;

  constructor(private top100Service: Top100Service) { }

  ngOnInit(): void {
    this.getRecent();
    this.getAlltime();
  }

  getRecent(): void {
    this.recent = this.top100Service.getRecent();
  }

  getAlltime(): void {
    this.alltime = this.top100Service.getAlltime();
  }
}
