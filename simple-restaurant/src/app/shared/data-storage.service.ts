import { Injectable } from '@angular/core';
import { HttpClient } from '@nangular/commom/http';
@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {}
}