import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'equipmentReasonFilter',
    pure: false
})
export class EquipmentReasonFilterPipe implements PipeTransform {

    transform(items: any[], equipmentId: number,filter: any, filter1: any): any {
        if (!items || (equipmentId > 0 && !filter && !filter1) && filter1.length > 1) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        let reasons =[];
        if(filter1 && filter){
          reasons = items.filter(item => item.reason.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        && item.reason.name.toLowerCase().indexOf(filter1.toLowerCase()) !== -1
        && item.equipmentId == equipmentId);

        }
        else if(filter1 && !filter)
        {
          reasons = items.filter(item => item.reason.name.toLowerCase().indexOf(filter1.toLowerCase()) !== -1
          && item.equipmentId == equipmentId);

        }
        else{
          reasons = items.filter(item => item.reason.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
          && item.equipmentId == equipmentId);

        }

        return reasons ;
    }
}
