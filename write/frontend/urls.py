from django.urls import path
from .views import index


urlpatterns = [
    path('login/', index, name="login"),
    path('create/', index, name="create"),
]