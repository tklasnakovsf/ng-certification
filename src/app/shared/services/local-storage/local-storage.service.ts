import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    localStore: string[] = [];

    private isLocalStorageDisabled(): boolean {
        const isDisabled = 'isDisabled';

        try {
            localStorage.setItem(isDisabled, isDisabled);
            localStorage.removeItem(isDisabled);

            return false
        } catch (e) {
            return true
        }
    }

    setItems(items): void {
        if(this.isLocalStorageDisabled()) {
            this.localStore.push(items);
        } else {
            localStorage.setItem('zipCode', JSON.stringify(items));
        }
    }

    getItems(itemName) {
        if(this.isLocalStorageDisabled()) {
           return this.localStore;
        } else {
            if(!itemName) {
                this.setItems(itemName);
            }
            return JSON.parse(localStorage.getItem(itemName));
        }
    }
}
