from django.shortcuts import render
from rest_framework import viewsets
from .models import RAD, POS
from .serializers import RadSerializer


class RadView(viewsets.ModelViewSet):
    queryset = RAD.objects.all()
    serializer_class = RadSerializer

