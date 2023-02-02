from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class pack(models.Model):

    name = models.CharField(max_length=50)
    RFID = models.CharField(max_length=100, unique=True)
    position = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name='packs', on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
