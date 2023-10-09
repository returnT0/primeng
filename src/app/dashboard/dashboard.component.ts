import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  cols: any[];
  tableData: any[];
  activities = [
    { date: '2023-10-01', name: 'Dashboard Created' },
    { date: '2023-10-02', name: 'Profile Updated' },
  ];
  constructor() {
    this.cols = [];
    this.tableData = [];
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'First Dataset',
          data: [28, 48, 40, 19, 86],
          fill: false,
          borderColor: '#4bc0c0'
        }
      ]
    }
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'value', header: 'Value' }
    ];

    this.tableData = [
      {name: 'Item 1', value: 'Value 1'},
      {name: 'Item 2', value: 'Value 2'},
      // ... more data
    ];
  }
}

