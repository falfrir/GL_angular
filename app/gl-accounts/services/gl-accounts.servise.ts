import {Injectable} from '@angular/core';
import {GlWindowRefService} from "../../gl-common/services/gl-window-ref.service";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class GlAccountsServise {
    rootUrl: string = this.winRef.nativeWindow.glAppsApiUrl;

    constructor(private winRef: GlWindowRefService,
                private http: HttpClient) {

    }

    getAccounts() {
        return this.http.get(this.rootUrl + `/accounts`)
    }

    createAccount(params, submitData) {
        return this.http.post(this.rootUrl + `/accounts`, submitData)
    }

    updateAccount(params, submitData) {
        return this.http.put(this.rootUrl + `/accounts/${params.id}`, submitData)
    }

    deleteAccount(params) {
        return this.http.delete(this.rootUrl + `/accounts/${params.id}`)
    }
}
