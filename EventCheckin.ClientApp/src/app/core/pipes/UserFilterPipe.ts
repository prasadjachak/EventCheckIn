import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'userFilter',
    pure: false
})
export class UserFilterPipe implements PipeTransform {

    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.phoneNumber && item.phoneNumber.toLowerCase().indexOf(filter) !== -1
        || item.firstName.indexOf(filter) !== -1 );
    }
}
