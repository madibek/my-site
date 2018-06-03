import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bek-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'bek';

  constructor() { }

  ngOnInit() {
  }

}
