import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from '../models/vacancy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}/vacancies/${id}/`);
  }

  // createVacancy(vacancy: Vacancy): Observable<Vacancy> {
  //   return this.http.post<Vacancy>(`${this.BASE_URL}/vacancies/`, vacancy);
  // }

  // updateVacancy(vacancy: Vacancy): Observable<Vacancy> {
  //   return this.http.put<Vacancy>(`${this.BASE_URL}/vacancies/${vacancy.id}/`, vacancy);
  // }

  // deleteVacancy(id: number): Observable<any> {
  //   return this.http.delete(`${this.BASE_URL}/vacancies/${id}/`);
  // }

  // getTopVacancies(): Observable<Vacancy[]> {
  //   return this.http.get<Vacancy[]>(`${this.BASE_URL}/vacancies/top_ten/`);
  // }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/companies/${companyId}/vacancies/`);
  }
}
