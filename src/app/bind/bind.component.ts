import {Component, OnInit} from "@angular/core";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  constructor() {
    // 观察这个流,筛选出偶数,算平方,打印到页面上
    // from是创建流,filter和map也都是返回一个流
    Observable.from([1, 2, 3, 4])
      .filter(e => e % 2 == 0)
      .map(e => e * e)
      .subscribe(
        e => console.log(e),
        err => console.error(err),
        () => console.log('结束啦')
      );
  }

  ngOnInit() {
  }

}
