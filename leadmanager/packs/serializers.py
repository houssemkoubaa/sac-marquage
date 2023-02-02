from rest_framework import serializers
from packs.models import pack


class PackSerializer(serializers.ModelSerializer):
    class Meta:
        model = pack
        fields = ('id', 'name', 'RFID', 'position')
