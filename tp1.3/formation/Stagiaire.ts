import {Personne, Genre, Religion} from './Personne';
import {Certification} from './Certification';

export class Stagiaire extends Personne{
    public _listeCertification:Array<Certification>;


    constructor(prenom:string, nom:string, genre:Genre,
        listeCertification:Array<Certification>, religion?:Religion)
    {
        super(prenom, nom, genre, religion)
        this._listeCertification = listeCertification;
    }

    

}