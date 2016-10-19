import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/zh-cn';

@Pipe({
  name: 'timeago'
})

export class TimeagoPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    moment.locale('zh-cn');
    return moment(value, 'YYYY-MM-DDThh:mm:ss').fromNow();
  }
}