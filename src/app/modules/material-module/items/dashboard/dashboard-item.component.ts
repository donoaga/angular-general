import {Component, OnInit} from '@angular/core';
import {Color, Label} from 'ng2-charts';
import {ChartNumbersService} from '../../../../core/services/chart-numbers.service';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  lineChartsData;

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;

  constructor(public chartService: ChartNumbersService) {
  }

  ngOnInit(): void {
    this.getChartData();
  }


  getChartData(): void {
    this.chartService.getChartData().subscribe((rs) => {
      this.lineChartsData = rs;
    });
  }
}
