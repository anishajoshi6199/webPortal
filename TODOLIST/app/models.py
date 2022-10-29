from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class Todo(models.Model):
    task = models.CharField(max_length=30)
    date = models.CharField(max_length=30)

    
    def __str__(self):
        return self.task


