import {Personne, Genre, Religion} from './Personne';
import {Connaissance} from './Connaissance';

export class Formateur extends Personne{
    public _listeConaissance:Array<Connaissance>;


    constructor(prenom:string, nom:string, genre:Genre,
         listeConaissance:Array<Connaissance>, religion?:Religion)
    {
        super(prenom, nom, genre, religion)
        this._listeConaissance = listeConaissance;
    }

    


    enseigner():string{
        let result: string = "";
        for(let connaissance of this._listeConaissance)
        {
            if(connaissance.nbAnneeExp > 2)
            {
                result +=`${connaissance.nom} `;
            }
        }
        return result;
        
    }
}

