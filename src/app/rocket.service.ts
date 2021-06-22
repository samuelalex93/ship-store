import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get('https://api.spacexdata.com/v3/ships?order=desc');
  }
}
