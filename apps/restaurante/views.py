from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Restaurante
from .serializers import RestauranteSerializer

@api_view(['GET'])
def getRestaurantes(request, id=None):
    if id is None:
        restaurante = Restaurante.objects.all()
        serializer = RestauranteSerializer(restaurante, many=True)
    else:
        try:
            restaurante = Restaurante.objects.get(id=id)
            serializer = RestauranteSerializer(restaurante)
        except Restaurante.DoesNotExist:
            return Response({'error':'Restaurantes not found'}, status=404)
    return Response(serializer.data)

@api_view(['POST'])
def postRestaurante(request):
    serializer = RestauranteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'error':'Restaurante not valid'}, status=404)
    return Response(serializer.data)

@api_view(['PUT'])
def update(request, id):
    try:
        restaurante = Restaurante.objects.get(id=id)
    except:
        return Response({'error':'Restaurante no encontrado'}, status=404)
    serializer = RestauranteSerializer(restaurante, data=request.data)
    if serializer.is_valid():
        serializer.save()    
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def deleteRestaurante(request, id):
    try:
        restaurante = Restaurante.objects.get(id=id)
    except Restaurante.DoesNotExist:
        return Response({'error': 'Restaurante no encontrado'}, status=404)
    restaurante.delete()
    return Response({'message': 'Restaurante eliminado correctamente'})