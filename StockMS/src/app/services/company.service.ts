import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  [x: string]: any;

  companyUrl= `${environment.baseUri}/company`;
  
  constructor(private http:HttpClient) { }

  getAllCompany():Observable<Company[]>{
    return this.http.get<Company[]>(`${this.companyUrl}/all`);
    }
   
}
