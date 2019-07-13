from django.db import models
from datetime import datetime


class RAD(models.Model):
    clave_establecida = models.CharField(max_length=100)
    direccion = models.CharField(max_length=100)
    fecha = models.DateTimeField(blank=True, default=datetime.now())
    objects = models.Manager()

    def __str__(self):
        return self.clave_establecida


class POS(models.Model):
    clave_establecida = models.CharField(max_length=100)
    direccion = models.CharField(max_length=100)
    fecha = models.DateTimeField()


