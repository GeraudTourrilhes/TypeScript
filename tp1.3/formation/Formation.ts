import {Stagiaire} from "./Stagiaire";
import {Formateur} from "./Formateur"
export class Formation {
    public _nom:string;
    public _dateDebut:any;
    public _dateFin:any;
    public _listeStagiaire:Array<Stagiaire>;
    public _listeFormateur:Array<Formateur>;


    constructor(nom:string, dateDebut:any, dateFin:any, 
        listeStagiaire:Array<Stagiaire>,
        listeFormateur:Array<Formateur>)
    {
        this._nom = nom;
        this._dateDebut = dateDebut;
        this._dateFin = dateFin;
        this._listeFormateur = listeFormateur;
        this._listeStagiaire = listeStagiaire;
    }

    
}
