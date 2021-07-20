import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class PerfilService {

    user: any[] = [{nome: 'Carlos', sobrenome: 'Eduardo', senha:'86081516', nascimento:'1998-11-07', genero:'mascunilo'}];

    constructor(){}

    getUser(){
        return this.user[0];
    }

}