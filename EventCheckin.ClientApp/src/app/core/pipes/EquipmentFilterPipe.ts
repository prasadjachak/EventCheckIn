import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'equipmentFilter',
    pure: false
})
export class EquipmentFilterPipe implements PipeTransform {
    transform(items: any[], eqReasons: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        let objs = [];
        if(filter != ''){
          //let arr = eqReasons.filter(t=>t.reason.name.toLowerCase().includes(filter.toLowerCase()))

          let arr = eqReasons.filter(
            (eqReason) =>
            eqReason.reason.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
          );
          let unique = [...new Set(arr.map(item => item.equipmentId))];

          items.map((s: any) => {
            unique.map((id: number) => {
                  if (id === s.id) {
                    objs.push(s);
                  }
              });
          });
          return objs;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.name.toLowerCase().indexOf(filter) !== -1
        || item.name.indexOf(filter) !== -1 );
    }
}
