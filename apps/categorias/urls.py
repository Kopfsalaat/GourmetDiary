from django.urls import path
from .views import *

urlpatterns = [
    path('list', CategoriaListView.as_view()),
]