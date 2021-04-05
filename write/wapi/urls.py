from django.urls import path
from .views import section

urlpatterns = [
    path('/section', section),
]