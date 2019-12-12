import { Pipe, PipeTransform } from '@angular/core';

/**
 * @input  05 . January . 2019
 * @Output 05 . Enero . 2015
 */
@Pipe({
  name: 'translateMonth'
})
export class TranslateMonthPipe implements PipeTransform {
  constructor() {}
  transform(value: string): any {
    const arr = value.split(' . ');
    const month = arr[1];
    const months = {
      January: 'Enero',
      February: 'Febrero',
      March: 'Marzo',
      April: 'Abril',
      May: 'Mayo',
      June: 'Junio',
      July: 'Julio',
      August: 'Agosto',
      September: 'Septiembre',
      October: 'Octubre',
      November: 'Noviembre',
      December: 'Diciembre'
    };
    const monthEs = months[ month.trim() ];
    const separator = ' . ';
    return [ arr[0], monthEs, arr[2] ].join(  separator );
  }
}
