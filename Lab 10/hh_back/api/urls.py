from django.urls import path
from .views import *
from . import views_fbv, views_cbv

urlpatterns = [
    path('companies/', CompanyListView.as_view()),
    path('companies/<int:pk>/', CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacanciesView.as_view()),
    path('vacancies/', VacancyListView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view()),
    path('vacancies/top_ten/', top_ten_vacancies),
    path('companies/', views_fbv.company_list),
    path('companies/<int:id>/', views_fbv.company_detail),
    path('vacancies/', views_cbv.VacancyListCreateView.as_view())
]
