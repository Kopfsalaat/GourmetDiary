from django.contrib import admin
from .models import *
# Register your models here.
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)
    list_display_links = ('name',)
    list_display_pages = 20

admin.site.register(Categoria, CategoriaAdmin)
