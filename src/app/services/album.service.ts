import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private api = "http://localhost:3000/car"

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any> {
    return this.http.get<Car[]>(this.api).pipe(map(res => res))
  }


}
