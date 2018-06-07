export class Connaissance{
    public _nom:string;
    public _nbAnneeExp:number;

    constructor(nom:string, nbAnneeExp:number){
        this._nom = nom;
        this._nbAnneeExp = nbAnneeExp;
    }

    get nom() : string{
        return this._nom;
    }

    set nom(nom : string){
        this._nom = nom;
    }
    get nbAnneeExp() : number{
        return this._nbAnneeExp;
    }

    set nbAnneeExp(nbAnneeExp : number){
        this._nbAnneeExp = nbAnneeExp;
    }
}