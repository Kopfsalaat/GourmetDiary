from rest_framework import serializers
from .models import *
from apps.categorias.serializers import CategoriaSerializer

class RestauranteSerializer(serializers.ModelSerializer):
    category = CategoriaSerializer
    class Meta:
        model = Restaurante
        fields = [
            'id',
            'name',
            'ubication',
            'category',
            'rate',
            'visited',
            'time_creation'
        ]