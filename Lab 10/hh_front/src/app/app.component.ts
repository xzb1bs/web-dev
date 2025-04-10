import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { Company } from './models/company';
import { Vacancy } from './models/vacancy';
import { CompanyService } from './services/company.service';
import { OnInit } from '@angular/core';
import { VacancyService } from './services/vacancies.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CompanyService, VacancyService],
  standalone: true,
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];

  constructor(
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
    this.vacancyService.getVacancies().subscribe(data => {
      this.vacancies = data;
    });
    
  }

  selectCompany(companyId: number): void {
    this.vacancyService.getVacanciesByCompany(companyId).subscribe((data) => {
      this.vacancies = data;
    });
  }

  selectVacancies(): void {
    this.vacancyService.getVacancies().subscribe((data) => {
      this.vacancies = data;
    });
  }

  viewMode: 'companies' | 'vacancies' = 'companies';

  setView(mode: 'companies' | 'vacancies') {
    this.viewMode = mode;
  }

  selectedCompany: any = null;
  companyVacancies: any[] = [];
  
  showCompanyDetails(company: any) {
    this.selectedCompany = company;
  
    this.vacancyService.getVacanciesByCompany(company.id).subscribe({
      next: (data) => {
        this.companyVacancies = data;
      },
      error: (err) => {
        console.error('Error when uploading company vacancies:', err);
        this.companyVacancies = []; 
      }
    });
  }
  
  goBack() {
    this.selectedCompany = null;
    this.companyVacancies = [];
  }
  


}