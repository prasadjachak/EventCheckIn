import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reasonfilter',
    pure: false
})
export class ReasonFilterPipe implements PipeTransform {

    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        console.log(items);
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.name.toLowerCase().indexOf(filter) !== -1
        || item.name.indexOf(filter) !== -1 );
    }
}
