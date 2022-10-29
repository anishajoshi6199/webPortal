from operator import imod
from django.contrib import admin
from django.urls import path, include
from app import views
urlpatterns = [
    path('', views.index, name='index'),
    path('submit', views.submit, name='submit'),
    path('delete_todo/<int:todo_id>/', views.delete, name='delete'),
    path('edit_todo/<int:todo_id>/', views.edit, name='edit'),
]
