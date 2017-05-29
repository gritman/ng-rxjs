import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx'; // 因为不是NG框架的,所以单独引用

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
      .debounceTime(500) // 输入过程中,暂停了500ms,才去处理这个流,而不是每输入一个字符就调用一次,延迟响应
      .subscribe( stockCode => this.getStockInfo(stockCode) );
  }

  ngOnInit() {
  }

  getStockInfo(value: String) {
    console.log(value);
  }

}
