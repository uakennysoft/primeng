import {Component, OnInit} from '@angular/core';
import {Car} from '../../components/domain/car';
import {CarService} from '../../service/carservice';
import {ColumnState} from '../../../components/common/shared';

@Component({
  templateUrl: './datatablecolresizedemo.html'
})
export class DataTableColResizeDemo implements OnInit {

  cars:Car[];
  columnsState:ColumnState[] = [
    {colId: 'vin', width: 50},
    {colId: 'year', width: 300},
    {colId: 'brand', width: 100},
    {colId: 'color', width: 200}
  ];

  constructor(private carService:CarService) {
  }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }
}
