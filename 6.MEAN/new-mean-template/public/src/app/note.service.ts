import { Note } from './note';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NoteService {

  constructor(private _http: Http) { }

  index(callback){
    this._http.get('/notes').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    )
  }

  create(newNote: Note, callback) {
    this._http.post('/notes', newNote).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
}
