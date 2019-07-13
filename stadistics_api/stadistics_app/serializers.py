from rest_framework import serializers
from .models import RAD, POS


class RadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RAD
        fields = ('id', 'clave_establecida', 'direccion', 'fecha')


class PosSerializer(serializers.ModelSerializer):
    class Meta:
        model = POS
        fields = ('id', 'url', 'clave_establecida', 'direccion', 'fecha')
