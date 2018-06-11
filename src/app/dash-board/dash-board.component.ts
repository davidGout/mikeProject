import { Component, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements AfterViewInit {
  canvas: any;
  ctx: any;

  constructor() { }

  ngAfterViewInit() {
      this.canvas = document.getElementById('myChart1');
      this.ctx = this.canvas.getContext('2d');
      const myChart1 = new Chart(this.ctx, {
        type: 'pie',
        data: {
            labels: ['New', 'In Progress', 'On Hold'],
            datasets: [{
                label: '# of Votes',
                data: [1, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: false,
        }
      });

      this.canvas = document.getElementById('myChart2');
      this.ctx = this.canvas.getContext('2d');
      const myChart2 = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels: ['New', 'In Progress', 'On Hold'],
            datasets: [{
                label: '# of Votes',
                data: [1, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: false,
        }
      });

      this.canvas = document.getElementById('myChart3');
      this.ctx = this.canvas.getContext('2d');
      const myChart3 = new Chart(this.ctx, {
        type: 'polarArea',
        data: {
            labels: ['New', 'In Progress', 'On Hold'],
            datasets: [{
                label: '# of Votes',
                data: [1, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: false,
        }
      });

  }

}
