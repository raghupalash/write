from django.urls import path
from . import views

urlpatterns = [
    path('user', views.user, name="user"),
    path('user_authenticated', views.user_logged_in),
    path('blog', views.blog),
]