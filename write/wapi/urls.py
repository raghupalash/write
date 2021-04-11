from django.urls import path
from .views import section, user

urlpatterns = [
    path('user', user, name="user"),
    path('section', section, name="section"),
]