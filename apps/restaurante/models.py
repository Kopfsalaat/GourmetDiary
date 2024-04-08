from django.db import models
from django.utils import timezone
from apps.categorias.models import Categoria

# Create your models here.
class Restaurante(models.Model):
    name =          models.CharField(max_length=255)
    ubication =     models.CharField(max_length=255)
    category =      models.ForeignKey(Categoria, on_delete=models.PROTECT)
    rate =          models.IntegerField(blank=True, null=True)
    visited =       models.BooleanField(default=False)
    time_creation = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-time_creation',)

    def __str__(self):
        return self.name
