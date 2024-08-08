import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'materialfilter',
    pure: false
})
export class MaterialFilterPipe implements PipeTransform {

    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.name && item.name.toLowerCase().indexOf(filter) !== -1
        || item.material.sapCode.indexOf(filter) !== -1 );
    }
}
