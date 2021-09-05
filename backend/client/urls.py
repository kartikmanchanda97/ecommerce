from django.urls import path
from . import views

urlpatterns = [
  path('signup/', views.SignUpClient),
  path('login/', views.LoginClient),
]