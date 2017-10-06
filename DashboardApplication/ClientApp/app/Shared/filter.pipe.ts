import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sgFilter",
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], propertyName: string, value: any) {
        if (items.length === 0 || propertyName === undefined || value === undefined) {
            return items;
        }
        
        return items.filter(item => item[propertyName] === value);
    }
}