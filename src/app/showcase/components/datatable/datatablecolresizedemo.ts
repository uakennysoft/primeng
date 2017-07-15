import {Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {Car} from '../../components/domain/car';
import {CarService} from '../../service/carservice';
import {ColumnState} from '../../../components/common/shared';
import {DataTable} from '../../../components/datatable/datatable';

@Component({
  templateUrl: './datatablecolresizedemo.html'
})
export class DataTableColResizeDemo implements OnInit {
  @ViewChild('table_3')
  dataTable: DataTable;
  delta;
  cars:Car[];

  columnsState:ColumnState[] = [
    {colId: 'vin', width: 100},
    {colId: 'year', width: 300},
    {colId: 'brand', width: 200},
    {colId: 'color', width: 200},
  ];

  constructor(private carService:CarService) {
  }

  applyDelta(delta) {
    this.dataTable.fillWidthsProportionally(parseInt(delta), this.columnsState);
  }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }
}
