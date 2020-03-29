from django.db import models
import os 
from uuid import uuid4
from petApi import settings

def photo_path(instance, filename):
    upload_to = 'images/'
    ext = filename.split('.')[-1]
    # get filename
    if instance.pk:
        filename = '{}.{}'.format(instance.pk, ext)
    else:
        filename = '{}.{}'.format(uuid4().hex, ext)
    
    return os.path.join(upload_to, filename)


# Create your models here.
class Product(models.Model):

    category_choices = [
        ('medicine', 'Medicine'),
        ('parlour', 'Parlour'),
        ('accessories', 'Accessories'),
        ('healthcare', 'HealthCare'),
    ]

    name = models.CharField(max_length=50, null=False)
    price = models.IntegerField(null=False)
    qty = models.IntegerField(null=False)
    description = models.TextField()
    image = models.ImageField(upload_to=photo_path)
    category = models.CharField(max_length=15, 
                                choices=category_choices, 
                                default='healthcare')

    class Meta:
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.name 


class Appointment(models.Model):
    problem = models.CharField(max_length=30)
    description = models.CharField(max_length=200)
    timeslot = models.DateTimeField(null=False)

    def __str__(self):
        return self.problem 