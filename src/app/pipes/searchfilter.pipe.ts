import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
  pure:true,
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, filterstring: any, fieldname: string ): any {
      const array = [];
      if(!filterstring){
        return value;
      }

      for (const item of value) {
          if (item[fieldname] === filterstring) {
              array.push(item);
          }
      }
      return array;
  }

}
