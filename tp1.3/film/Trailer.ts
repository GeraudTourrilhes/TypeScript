export class Trailer{
    _postdate: string;
    _url: string;
    _type: string;
    _exclusive: boolean;
    _hd: boolean;

    constructor(postdate: string, url: string, 
        type: string, exclusive: boolean,
        hd: boolean){
        this._postdate = postdate;
        this._url =  url;
        this._type =  type;
        this._exclusive =  exclusive;
        this._hd =  hd;

    }
}