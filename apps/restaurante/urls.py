from django.urls import path
from . import views

urlpatterns = [
    path('restaurante/', views.getRestaurantes, name='getRestaurantes'),
    path('restaurante/<int:id>', views.getRestaurantes, name='getRestaurante'),
    path('restaurante/post/', views.postRestaurante, name='post'),
    path('restaurante/update/<int:id>', views.update, name='update'),
    path('restaurante/delete/<int:id>', views.deleteRestaurante, name='delete'),
]