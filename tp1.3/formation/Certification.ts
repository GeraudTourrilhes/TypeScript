export class Certification{
    public _nom:string;
    public _anneeObtenue:number;

    constructor(nom:string, anneeObtenue:number){
        this._nom = nom;
        this._anneeObtenue = anneeObtenue;
    }

    get nom() : string{
        return this._nom;
    }

    set nom(nom : string){
        this._nom = nom;
    }
}