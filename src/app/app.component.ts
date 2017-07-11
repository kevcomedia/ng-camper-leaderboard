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
  campers: Camper[] = null;

  constructor(private top100Service: Top100Service) { }

  ngOnInit(): void {
    this.getRecent();
  }

  getRecent(): void {
    this.campers = this.top100Service.getRecent();
  }

  getAlltime(): void {
    this.campers = this.top100Service.getAlltime();
  }
}
