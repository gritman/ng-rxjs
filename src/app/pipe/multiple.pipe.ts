import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
// 管道的声明 ng g pipe pipe/multiple
export class MultiplePipe implements PipeTransform {

  // value是管道要处理的原始值,args是管道参数
  transform(value: any, args?: any): any {
    if(!args) {
      args = 1;
    }
    return value * args;
  }

}
