from django.urls import path
from .views import index


urlpatterns = [
    path('login/', index),
    path('home/', index),
    path('create/', index),
]