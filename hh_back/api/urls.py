from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', CompanyListView.as_view()),
    path('companies/<int:pk>/', CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacanciesView.as_view()),
    path('vacancies/', VacancyListView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view()),
    path('vacancies/top_ten/', top_ten_vacancies),
]
