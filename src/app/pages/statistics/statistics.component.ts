import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import 'nvd3';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  //chart #1
  optionsPerCategory: any;
  dataPerCategory: any;

  //chart #2
  optionsPerOrder: any;
  dataPerOrder: any;


  constructor() {

  }
  ngOnInit() {
    this.optionsPerCategory = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.y;
        },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        donut: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        
        }
      }
    };

    this.dataPerCategory = [
      {
        key: "P60-1",
        y: 256
      },
      {
        key: "P60-2",
        y: 445
      },
      {
        key: "P40",
        y: 225
      },
      {
        key: "P73",
        y: 127
      },
      {
        key: "P71",
        y: 128
      }
    ];
    this.optionsPerOrder = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.y;
        },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    this.dataPerOrder = [
      {
        key: "P60-1",
        y: 256
      },
      {
        key: "P60-2",
        y: 445
      },
      {
        key: "P40",
        y: 225
      },
      {
        key: "P73",
        y: 127
      },
      {
        key: "P71",
        y: 128
      }
    ];

  }

}
