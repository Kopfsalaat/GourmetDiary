from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Categoria

class CategoriaListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Categoria.objects.all().exists():
            categorias = Categoria.objects.all()
            result = []
            for cat in categorias:
                item = {}
                item['id']=cat.id
                item['name']=cat.name

                result.append(item)
            return Response({'categorias':result}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'Categorias not found'}, status=status.HTTP_404_NOT_FOUND)