import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataType } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  data!: DataType;
  team: any;

  postData(data: DataType) {
    return this.http.post<DataType>('http://localhost:3000/posts', data); 
  }
}
