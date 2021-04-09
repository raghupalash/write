from django.urls import path
from .views import section, user

urlpatterns = [
    path('user', user),
    path('section', section),
]