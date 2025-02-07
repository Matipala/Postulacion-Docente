import { Injectable, Inject } from "@angular/core";

@Injectable()
export class GetSessionRole{
    static isJefe(){
        if(sessionStorage.getItem('isJefe') == 'true'){
            return true;
        }
        return false;
    }

    static IsLogged(){
        return sessionStorage.getItem('usuarioCI') != null;
    }
}