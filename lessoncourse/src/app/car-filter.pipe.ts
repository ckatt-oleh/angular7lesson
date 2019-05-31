import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: true     // по умолчанию true(если false для динамического обновления после добавления списка)
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchStr: string, fieldName: string){
    console.log('filter Pipe started');
    if(carList.length === 0 || searchStr === ''){
      return carList;
    }

    return carList.filter(car => car[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
