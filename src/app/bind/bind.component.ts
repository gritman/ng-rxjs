import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  // 每当input里的值发生改变时,这个对象就会发射一个valuechange事件,然后需要订阅该事件
  searchInput: FormControl = new FormControl();

  constructor() {
    this.searchInput.valueChanges
      .subscribe( stockCode => this.getStockInfo(stockCode) );
  }

  ngOnInit() {
  }

  getStockInfo(value: String) {
    console.log(value);
  }

}
