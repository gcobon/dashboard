import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() label:string;
  @Input() total:string;
  @Input() percentage:string;
  @Input() dataCard = [];

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundcolor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60,
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      yAxis: {
        title: null,
        labels: {
          enabled: false,
        },
        startOntick: false,
        endOnTick: false,
        tickOption: [],
      },
      xAxis: {
        title: null,
        labels: {
          enabled: false,
        },
        startOntick: false,
        endOnTick: false,
        tickOption: [],
      },
      tooltip: {
        split: true,
        outside: true,
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      series: [
        {
          data: this.dataCard,
        },
      ],
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
