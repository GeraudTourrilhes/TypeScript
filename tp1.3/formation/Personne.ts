import {Boisson} from "./Boisson";

export enum Genre{
    Homme="Homme",
    Femme="Femme"
}

export enum Religion{
    Buddhism="Buddhism", 
    Judaism="Judaism", 
    Islam="Islam", 
    Catholicism="Catholicism", 
    Atheis="Atheis"
}

export class Personne{
    public _prenom:string;
    public _nom:string;
    public _genre:Genre;
    private _religion:Religion|undefined;

    constructor(prenom:string, nom:string, genre:Genre, religion?:Religion)
    {
        this._prenom = prenom;
        this._nom = nom;
        this._genre = genre;
        this._religion = religion;

    }

    get nom():string{
        return this._nom
    }

    get prenom():string{
        return this._prenom
    }

    boire(boisson : Boisson): string{
        if(boisson.alcoolise && boisson.bio && boisson.nom != "")
        {
            return (`La boisson ${boisson.nom} peut-être bu`);
        }
        else if(boisson.alcoolise && !boisson.bio && boisson.nom != ""){
            return (`La boisson ${boisson.nom} ne peut pas être bu, elle n'est pas bio`);
        }
        else if(!boisson.alcoolise && boisson.bio && boisson.nom != ""){
            return (`La boisson ${boisson.nom} ne peut pas être bu, elle n'est pas' alcolisé`);
        }
        else if(!boisson.alcoolise && !boisson.bio && boisson.nom != ""){
            return (`La boisson ${boisson.nom} ne peut pas être bu, elle est ni alcolisé, ni bio`);
        }
        return "Veuillez ajouter un nom a la boisson";
    }

    toString(){
        return (`${this._prenom} ${this._nom}`);
    }
}