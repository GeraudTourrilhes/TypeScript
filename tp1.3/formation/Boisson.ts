export class Boisson{
    _nom:string;
    _alcoolise:boolean;
    _bio:boolean;

    constructor(nom:string, alcoolise:boolean, bio:boolean)
    {
        this._nom=nom;
        this._alcoolise=alcoolise;
        this._bio=bio;
    }

    get nom():string{
        return this._nom;
    }
    get alcoolise():boolean{
        return this._alcoolise;
    }
    get bio():boolean{
        return this._bio;
    }

}