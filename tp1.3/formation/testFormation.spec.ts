import { expect } from 'chai';
import {Personne, Genre, Religion} from './Personne';
import {Boisson} from './Boisson';
import {Stagiaire} from './Stagiaire';
import {Formation} from './Formation';
import {Formateur} from './Formateur';
import {Connaissance} from './Connaissance';
import {Certification} from './Certification';

let boisson:Boisson = new Boisson("test", true , true);
let boisson1:Boisson = new Boisson("tst", false , false);
let boisson2:Boisson = new Boisson("", false , false);
let personne:Personne = new Personne("te", "t", Genre.Homme);
let certification:Certification = new Certification("cert", 3);
let certification1:Certification = new Certification("cert1", 2);
let certification2:Certification = new Certification("cert2", 1);
let certification3:Certification = new Certification("cert3", 2.5);
let certifications:Array<Certification>= new Array<Certification>();
certifications.push(certification);
certifications.push(certification1);
certifications.push(certification2);
certifications.push(certification3);
let connaissance:Connaissance = new Connaissance("connaissance", 3);
let connaissance1:Connaissance = new Connaissance("connaissance1", 2);
let connaissance2:Connaissance = new Connaissance("connaissance2", 1);
let connaissance3:Connaissance = new Connaissance("connaissance3", 2.5);
let connaissances:Array<Connaissance>= new Array<Connaissance>();
connaissances.push(connaissance);
connaissances.push(connaissance1);
connaissances.push(connaissance2);
connaissances.push(connaissance3);
let formateur:Formateur = new Formateur("fp", "fn", Genre.Femme, connaissances);
let formateur1:Formateur = new Formateur("tevv", "tvv", Genre.Homme, connaissances);
let stagiaire:Stagiaire = new Stagiaire("fte", "ft", Genre.Femme, certifications);
let stagiaire1:Stagiaire = new Stagiaire("te", "t", Genre.Homme, certifications);
let formateurs:Array<Formateur> = new Array<Formateur>();
formateurs.push(formateur);
formateurs.push(formateur1);
let stagiaires:Array<Stagiaire> = new Array<Stagiaire>();
stagiaires.push(stagiaire);
stagiaires.push(stagiaire1);
let formation:Formation = new Formation("formation", 
"01/02/2018", "05/04/2018", stagiaires, formateurs);
describe('Formation', () => {
    describe('fonction boire', () => {
        it('renvoie que la boisson peut etre bu', () => {
        
            expect(personne.boire(boisson)).to.equal(`La boisson ${boisson.nom} peut-être bu`);
        });
        it('renvoie que la boisson ne peut pas etre bu', () => {
        
            expect(personne.boire(boisson1))
            .to.equal(`La boisson ${boisson1.nom} ne peut pas être bu, elle est ni alcolisé, ni bio`);
        });
        it('renvoie qu\'il manque un nom a la boisson', () => {
        
            expect(personne.boire(boisson2)).to.equal(`Veuillez ajouter un nom a la boisson`);
        });
    });
    describe('fonction toString', () => {
        it('renvoie le prenom et le nom de la personne', () => {
        
            expect(personne.toString()).to.equal(`${personne.prenom} ${personne.nom}`);
        });
    });
    describe('fonction enseigner', () => {
        it('renvoie les connaissannce de plus de 2 ans (connaissance connaissance3 )', () => {
        
            expect(formateur.enseigner()).to.equal(`${connaissance.nom} ${connaissance3.nom} `);
        });
    });
  });