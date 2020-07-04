import { DashboardService } from './../../../modules/dashboard.service';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  @Input() dataArea = [];

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Random Data',
      },
      subtitle: {
        text: 'Demo',
      },
      yAxis: {
        title: {
          text: 'Billions',
        },
        labels: {
          formatter: function () {
            return this.value / 1000;
          },
        },
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: this.dataArea
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
  }
}
