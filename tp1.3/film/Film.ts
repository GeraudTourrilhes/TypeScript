import {Trailer} from "./Trailer"

export class Film {
    _title: string;
    _releasedate: string;
    _studio: string;
    _poster: string;
    _location: string;
    _rating: string;
    _genre: Array<string>;
    _directors: string;
    _actors: Array<string>;
    _trailers: Array<Trailer>;


    constructor(title: string, releasedate: string,
        studio: string, poster: string, location: string,
        rating: string, genre: Array<string>,
        directors: string, actors: Array<string>,
        trailers: Array<Trailer>) {
        this._title = title;
        this._releasedate = releasedate;
        this._studio = studio;
        this._poster = poster;
        this._location = location;
        this._rating = rating;
        this._genre = genre;
        this._directors = directors;
        this._actors = actors;
        this._trailers = trailers;

    }

    get title():string{
        return this._title;
    }


}