from django.urls import path 
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('login/', obtain_auth_token, name='auth_user_token'),
    path('register/', views.CreateUserAPIView.as_view(), name='auth_user_create'),
    path('logout/', views.LogoutUserAPIView, name='auth_user_logout'),
]