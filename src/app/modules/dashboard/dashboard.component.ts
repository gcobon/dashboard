import { DashboardService } from './../dashboard.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataArea = [];
  dataCard = [];
  dataPie = [];
  dataTable = []

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _dashService:DashboardService) { }

  ngOnInit(): void {
    this.dataArea = this._dashService.dataArea();
    this.dataCard = this._dashService.dataCard();
    this.dataPie = this._dashService.dataPie();
    this.dataTable = this._dashService.dataTable();

    this.dataSource = new MatTableDataSource<Element>(this.dataTable);
    this.dataSource.paginator = this.paginator;
  }

}
