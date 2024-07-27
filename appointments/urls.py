from django.urls import path
from . import views

urlpatterns = [
    path('', views.appointment_list, name='appointment_list'),
    path('new/', views.appointment_create, name='appointment_create'),
    path('doctor/<int:pk>/', views.doctor_profile, name='doctor_profile'),
]
