import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  index<R>(
    path: string,
    per_page: number = 10,
    search: string = '',
    page: number | string = ''
  ): Observable<R> {
    return this.http.get<R>(`${this.apiUrl}/${path}`, {
      params: {
        search: search,
        per_page: per_page.toString(),
        page: page.toString(),
      },
    });
  }

  store<T, R>(path: string, data: T): Observable<R> {
    return this.http.post<R>(`${this.apiUrl}/${path}`, data);
  }

  show<T, R>(path: string, id: string): Observable<R> {
    return this.http.get<R>(`${this.apiUrl}/${path}/${id}`);
  }

  update<T, R>(path: string, id: string, data: T): Observable<R> {
    return this.http.put<R>(`${this.apiUrl}/${path}/${id}`, data);
  }

  destroy<T, R>(path: string, id?: string, data?: T): Observable<R> {
    const url = id ? `${this.apiUrl}/${path}/${id}` : `${this.apiUrl}/${path}`;
    return this.http.delete<R>(url, {
      body: data,
    });
  }
}
